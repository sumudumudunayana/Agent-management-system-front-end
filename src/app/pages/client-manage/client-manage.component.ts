import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-client-manage',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './client-manage.component.html',
  styleUrl: './client-manage.component.css'
})
export class ClientManageComponent {
  id: any;
    public clientInfo: any = {};
    public updatedClientInfo: any = {};
  
    ngOnInit(): void {}
  
    async getClientInfo() {
      if (!this.id) {
        alert("Please enter a valid client ID.");
        return;
      }
  
      try {
        let response = await fetch(`http://localhost:8080/client/search-by-id/${this.id}`);
        if (!response.ok) {
          throw new Error("client not found or an error occurred.");
        }
        this.clientInfo = await response.json();
        this.updatedClientInfo = { ...this.clientInfo }; 
        console.log(this.clientInfo);
      } catch (error) {
        console.error("Error fetching client info:", error);
        alert("Error finding client info. Please check the ID and try again.");
      }
    }
  
    async updateClient() {
      try {
        let response = await fetch('http://localhost:8080/client/update-client', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.updatedClientInfo)
        });
  
        if (!response.ok) {
          throw new Error("Error updating client.");
        }
  
        alert("client updated successfully!");
        this.getClientInfo(); 
      } catch (error) {
        console.error("Error updating client:", error);
        alert("Error updating client. Please try again.");
      }
    }
  
    async deleteClient() {
      if (!confirm("Are you sure you want to delete this client?")) {
        return;
      }
  
      try {
        let response = await fetch(`http://localhost:8080/client/delete-by-id/${this.id}`, {
          method: 'DELETE'
        });
  
        if (!response.ok) {
          throw new Error("Error deleting client.");
        }
  
        alert("client deleted successfully!");
        this.clientInfo = {}; 
        this.id = null; 
      } catch (error) {
        console.error("Error deleting client:", error);
        alert("Error deleting client. Please try again.");
      }
    }

}
