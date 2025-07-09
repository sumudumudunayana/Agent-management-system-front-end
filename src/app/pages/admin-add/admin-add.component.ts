import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-add',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './admin-add.component.html',
  styleUrl: './admin-add.component.css'
})
export class AdminAddComponent {
   public admin: any = {
    adminName: "",
    adminContact: "",
    adminAddress: "",
    adminEmail: "",
  };

  async addAdmin() {
    try {
      let response = await fetch("http://localhost:8080/admin/add-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          "adminName": this.admin.adminName,
          "adminContact": this.admin.adminContact,
          "adminAddress": this.admin.adminAddress,
          "adminEmail": this.admin.adminEmail,
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add Admin');
      }

      alert('Admin added successfully');
      let body = await response.json();
      alert(JSON.stringify(body));
      return body;
      
    } catch (error) {
      console.error('Error:', error);
    }
  }

  clearFields() {
    this.admin = {
      adminName: "",
      adminContact: "",
      adminAddress: "",
      adminEmail: "",
    };
  }

}
