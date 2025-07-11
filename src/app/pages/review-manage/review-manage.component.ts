import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-manage',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './review-manage.component.html',
  styleUrl: './review-manage.component.css'
})
export class ReviewManageComponent {
  id: any;
    public reviewInfo: any = {};
    public updatedReviewInfo: any = {};
  
    ngOnInit(): void {}
  
    async getReviewInfo() {
      if (!this.id) {
        alert("Please enter a valid review ID.");
        return;
      }
  
      try {
        let response = await fetch(`http://localhost:8080/review/search-by-id/${this.id}`);
        if (!response.ok) {
          throw new Error("review not found or an error occurred.");
        }
        this.reviewInfo = await response.json();
        this.updatedReviewInfo = { ...this.reviewInfo }; 
        console.log(this.reviewInfo);
      } catch (error) {
        console.error("Error fetching review info:", error);
        alert("Error finding review info. Please check the ID and try again.");
      }
    }
  
    async updateReview() {
      try {
        let response = await fetch('http://localhost:8080/review/update-review', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.updatedReviewInfo)
        });
  
        if (!response.ok) {
          throw new Error("Error updating review.");
        }
  
        alert("review updated successfully!");
        this.getReviewInfo(); 
      } catch (error) {
        console.error("Error updating review:", error);
        alert("Error updating review. Please try again.");
      }
    }
  
    async deleteReview() {
      if (!confirm("Are you sure you want to delete this review?")) {
        return;
      }
  
      try {
        let response = await fetch(`http://localhost:8080/review/delete-by-id/${this.id}`, {
          method: 'DELETE'
        });
  
        if (!response.ok) {
          throw new Error("Error deleting review.");
        }
  
        alert("review deleted successfully!");
        this.reviewInfo = {}; 
        this.id = null; 
      } catch (error) {
        console.error("Error deleting review:", error);
        alert("Error deleting review. Please try again.");
      }
    }

}
