import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../common/navbar/navbar.component";
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listing',
  standalone: true,
  imports: [RouterLink, NavbarComponent, NgFor, FormsModule, CommonModule],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.css'
})
export class ListingComponent implements OnInit {
    ngOnInit(): void {
    this.getAgentInfo();
  }

  public agentInfo:any = []

  async getAgentInfo() {
    let response = await fetch("http://localhost:8080/agent/get-all");
    let body = await response.json();
    this.agentInfo = body;
    console.log(this.agentInfo);
    
  }

}
