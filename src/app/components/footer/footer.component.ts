import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  public navigateToGithub(): void {

    window.open('https://github.com/Kalixto73a/', '_blank');

  }

  public navigateToLinkedIn(): void {

    window.open('https://www.linkedin.com/in/alvarocerveravigara/', '_blank');

  }

  public navigateToGithubRepository(): void {

    window.open('https://github.com/Kalixto73a/BookApplication-Frontend-','_blank');

  }

}
