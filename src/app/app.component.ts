import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'John Doe';
  userAge: number = 25;
  profileImage: string = 'assets/profile.jpg';
}
