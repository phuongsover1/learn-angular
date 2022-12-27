import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mastering-pipes';
  name: string = '';
  date: string = '';

  onNameChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value: string = target.value;
    this.name = value;
  }
  onDateChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.date = target.value;
  }
}
