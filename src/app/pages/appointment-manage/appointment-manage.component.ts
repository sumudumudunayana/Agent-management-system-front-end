import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-manage',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './appointment-manage.component.html',
  styleUrl: './appointment-manage.component.css'
})
export class AppointmentManageComponent {
  id: any;
    public appointmentInfo: any = {};
    public updatedAppointmentInfo: any = {};
  
    ngOnInit(): void {}
  
    async getAppointmentInfo() {
      if (!this.id) {
        alert("Please enter a valid appointment ID.");
        return;
      }
  
      try {
        let response = await fetch(`http://localhost:8080/appointment/search-by-id/${this.id}`);
        if (!response.ok) {
          throw new Error("appointment not found or an error occurred.");
        }
        this.appointmentInfo = await response.json();
        this.updatedAppointmentInfo = { ...this.appointmentInfo }; 
        console.log(this.appointmentInfo);
      } catch (error) {
        console.error("Error fetching appointment info:", error);
        alert("Error finding appointment info. Please check the ID and try again.");
      }
    }
  
    async updateAppointment() {
      try {
        let response = await fetch('http://localhost:8080/appointment/update-appointment', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.updatedAppointmentInfo)
        });
  
        if (!response.ok) {
          throw new Error("Error updating appointment.");
        }
  
        alert("appointment updated successfully!");
        this.getAppointmentInfo(); 
      } catch (error) {
        console.error("Error updating appointment:", error);
        alert("Error updating appointment. Please try again.");
      }
    }
  
    async deleteAppointment() {
      if (!confirm("Are you sure you want to delete this appointment?")) {
        return;
      }
  
      try {
        let response = await fetch(`http://localhost:8080/appointment/delete-by-id/${this.id}`, {
          method: 'DELETE'
        });
  
        if (!response.ok) {
          throw new Error("Error deleting appointment.");
        }
  
        alert("appointment deleted successfully!");
        this.appointmentInfo = {}; 
        this.id = null; 
      } catch (error) {
        console.error("Error deleting appointment:", error);
        alert("Error deleting appointment. Please try again.");
      }
    }
}
