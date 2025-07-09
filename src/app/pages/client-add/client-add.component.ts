import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-add',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './client-add.component.html',
  styleUrl: './client-add.component.css',
})
export class ClientAddComponent {
  public client: any = {
    clientFirstName: '',
    clientLastName: '',
    clientAddress: '',
    clientEmail: '',
    clientPhoneNumber: '',
  };

  async addClient() {
    try {
      let response = await fetch('http://localhost:8080/client/add-client', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientFirstName: this.client.clientFirstName,
          clientLastName: this.client.clientLastName,
          clientAddress: this.client.clientAddress,
          clientEmail: this.client.clientEmail,
          clientPhoneNumber: this.client.clientPhoneNumber,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add client');
      }

      alert('client added successfully');
      let body = await response.json();
      alert(JSON.stringify(body));
      return body;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  clearFields() {
    this.client = {
      clientFirstName: '',
      clientLastName: '',
      clientAddress: '',
      clientEmail: '',
      clientPhoneNumber: '',
    };
  }
}
