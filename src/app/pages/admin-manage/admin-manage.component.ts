import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-manage',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './admin-manage.component.html',
  styleUrl: './admin-manage.component.css'
})
export class AdminManageComponent {
    id: any;
    public adminInfo: any = {};
    public updatedadminInfo: any = {};
  
    ngOnInit(): void {}
  
    async getAdminInfo() {
      if (!this.id) {
        alert("Please enter a valid admin ID.");
        return;
      }
  
      try {
        let response = await fetch(`http://localhost:8080/admin/search-by-id/${this.id}`);
        if (!response.ok) {
          throw new Error("Admin not found or an error occurred.");
        }
        this.adminInfo = await response.json();
        this.updatedadminInfo = { ...this.adminInfo }; 
        console.log(this.adminInfo);
      } catch (error) {
        console.error("Error fetching property info:", error);
        alert("Error finding property info. Please check the ID and try again.");
      }
    }
  
    async updateAdmin() {
      try {
        let response = await fetch('http://localhost:8080/admin/update-admin', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.updatedadminInfo)
        });
  
        if (!response.ok) {
          throw new Error("Error updating Admin.");
        }
  
        alert("Property updated successfully!");
        this.getAdminInfo(); 
      } catch (error) {
        console.error("Error updating admin:", error);
        alert("Error updating admin. Please try again.");
      }
    }
  
    async deleteAdmin() {
      if (!confirm("Are you sure you want to delete this admin?")) {
        return;
      }
  
      try {
        let response = await fetch(`http://localhost:8080/admin/delete-by-id/${this.id}`, {
          method: 'DELETE'
        });
  
        if (!response.ok) {
          throw new Error("Error deleting admin.");
        }
  
        alert("admin deleted successfully!");
        this.adminInfo = {}; 
        this.id = null; 
      } catch (error) {
        console.error("Error deleting admin:", error);
        alert("Error deleting admin. Please try again.");
      }
    }

}
