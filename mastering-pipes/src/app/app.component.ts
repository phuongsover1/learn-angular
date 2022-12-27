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
  amount: number = 0;
  height: number = 0;

  car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2000,
  };

  onNameChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value: string = target.value;
    this.name = value;
  }
  onDateChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.date = target.value;
  }

  onAmountChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.amount = Number.parseFloat(target.value);
  }

  onHeightChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.height = Number.parseFloat(target.value);
  }
}
