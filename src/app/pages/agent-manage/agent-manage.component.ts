import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent-manage',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './agent-manage.component.html',
  styleUrl: './agent-manage.component.css'
})
export class AgentManageComponent {
  id: any;
    public agentInfo: any = {};
    public updatedAgentInfo: any = {};
  
    ngOnInit(): void {}
  
    async getAgentInfo() {
      if (!this.id) {
        alert("Please enter a valid agent ID.");
        return;
      }
  
      try {
        let response = await fetch(`http://localhost:8080/agent/search-by-id/${this.id}`);
        if (!response.ok) {
          throw new Error("Agent not found or an error occurred.");
        }
        this.agentInfo = await response.json();
        this.updatedAgentInfo = { ...this.agentInfo }; 
        console.log(this.agentInfo);
      } catch (error) {
        console.error("Error fetching agent info:", error);
        alert("Error finding agent info. Please check the ID and try again.");
      }
    }
  
    async updateAgent() {
      try {
        let response = await fetch('http://localhost:8080/agent/update-agent', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.updatedAgentInfo)
        });
  
        if (!response.ok) {
          throw new Error("Error updating agent.");
        }
  
        alert("Agent updated successfully!");
        this.getAgentInfo(); 
      } catch (error) {
        console.error("Error updating agent:", error);
        alert("Error updating agent. Please try again.");
      }
    }
  
    async deleteAgent() {
      if (!confirm("Are you sure you want to delete this agent?")) {
        return;
      }
  
      try {
        let response = await fetch(`http://localhost:8080/agent/delete-by-id/${this.id}`, {
          method: 'DELETE'
        });
  
        if (!response.ok) {
          throw new Error("Error deleting agent.");
        }
  
        alert("Property deleted successfully!");
        this.agentInfo = {}; 
        this.id = null; 
      } catch (error) {
        console.error("Error deleting agent:", error);
        alert("Error deleting agent. Please try again.");
      }
    }
}
