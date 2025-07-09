import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent-add',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './agent-add.component.html',
  styleUrl: './agent-add.component.css',
})
export class AgentAddComponent {
  public agent: any = {
    agentName: '',
    agentContact: '',
    agentAddress: '',
    agentEmail: '',
    agentRating: '',
    agentDate: '',
  };

  async addAgent() {
    try {
      let response = await fetch('http://localhost:8080/agent/add-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentName: this.agent.agentName,
          agentContact: this.agent.agentContact,
          agentAddress: this.agent.agentAddress,
          agentEmail: this.agent.agentEmail,
          agentRating: this.agent.agentRating,
          agentDate: this.agent.agentDate,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add agent');
      }

      alert('agent added successfully');
      let body = await response.json();
      alert(JSON.stringify(body));
      return body;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  clearFields() {
    this.agent = {
      agentName: '',
      agentContact: '',
      agentAddress: '',
      agentEmail: '',
      agentRating: '',
      agentDate: '',
    };
  }
}
