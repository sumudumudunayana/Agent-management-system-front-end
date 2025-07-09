import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-add',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './appointment-add.component.html',
  styleUrl: './appointment-add.component.css',
})
export class AppointmentAddComponent {
  public appointment: any = {
    appointmentTitle: '',
    appointmentDate: '',
    appointmentCreatedBy: '',
    appointmentStatus: '',
  };

  async addAppointment() {
    try {
      let response = await fetch(
        'http://localhost:8080/appointment/add-appointment',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            appointmentTitle: this.appointment.appointmentTitle,
            appointmentDate: this.appointment.appointmentDate,
            appointmentCreatedBy: this.appointment.appointmentCreatedBy,
            appointmentStatus: this.appointment.appointmentStatus,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to add appointment');
      }

      alert('appointment added successfully');
      let body = await response.json();
      alert(JSON.stringify(body));
      return body;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  clearFields() {
    this.appointment = {
      appointmentTitle: '',
      appointmentDate: '',
      appointmentCreatedBy: '',
      appointmentStatus: '',
    };
  }
}
