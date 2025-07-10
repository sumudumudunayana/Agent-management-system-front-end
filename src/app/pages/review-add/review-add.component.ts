import { Component } from '@angular/core';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-add',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule],
  templateUrl: './review-add.component.html',
  styleUrl: './review-add.component.css',
})
export class ReviewAddComponent {
  public review: any = {
    rating: '',
    review: '',
  };

  async addReview() {
    try {
      let response = await fetch('http://localhost:8080/review/add-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rating: this.review.rating,
          review: this.review.review,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to add review');
      }

      alert('review added successfully');
      let body = await response.json();
      alert(JSON.stringify(body));
      return body;
    } catch (error) {
      console.error('Error:', error);
    }
  }

  clearFields() {
    this.review = {
      rating: '',
      review: '',
    };
  }
}
