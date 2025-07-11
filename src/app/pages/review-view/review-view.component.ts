import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-review-view',
  standalone: true,
  imports: [RouterLink, NavbarComponent, NgFor, FormsModule, CommonModule],
  templateUrl: './review-view.component.html',
  styleUrl: './review-view.component.css'
})
export class ReviewViewComponent implements OnInit{
  ngOnInit(): void {
    this.getReviewInfo();
  }

  public reviewInfo:any = []

  async getReviewInfo() {
    let response = await fetch("http://localhost:8080/review/get-all");
    let body = await response.json();
    this.reviewInfo = body;
    console.log(this.reviewInfo);
    
  }

}
