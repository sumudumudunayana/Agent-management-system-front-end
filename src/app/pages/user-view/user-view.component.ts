import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [RouterLink, NavbarComponent, NgFor, FormsModule, CommonModule],
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent implements OnInit {
  ngOnInit(): void {
    this.getUserInfo();
  }

  public userInfo:any = []

  async getUserInfo() {
    let response = await fetch("http://localhost:8080/user/get-all");
    let body = await response.json();
    this.userInfo = body;
    console.log(this.userInfo);
    
  }

}
