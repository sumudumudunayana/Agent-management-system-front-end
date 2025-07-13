import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-add',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.css',
})
export class UserAddComponent {
  public user: any = {
    userFirstName: '',
    userLastMame: '',
    userAddress: '',
    userEmail: '',
    userPhoneNumber: '',
    userDate: '',
  };

  async addUser() {
    try {
      let response = await fetch('http://localhost:8080/user/add-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userFirstName: this.user.userFirstName,
          userLastMame: this.user.userLastMame,
          userAddress: this.user.userAddress,
          userEmail: this.user.userEmail,
          userPhoneNumber: this.user.userPhoneNumber,
          userDate: this.user.userDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add user');
      }

      alert('user added successfully');
      let body = await response.json();
      alert(JSON.stringify(body));
      return body;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  clearFields() {
    this.user = {
      userFirstName: '',
      userLastMame: '',
      userAddress: '',
      userEmail: '',
      userPhoneNumber: '',
      userDate: '',
    };
  }
}
