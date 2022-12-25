import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'typing-challenge';
  randomText: string = faker.lorem.sentence();
  isSuccess: boolean = false;
  recentTypingValue: string = '';

  target: HTMLInputElement | null = null;

  public generateRandomText(): void {
    console.log(this.target);

    if (this.target) {
      this.target.disabled = false;
      this.target.value = '';
    }
    this.randomText = faker.lorem.sentence();
    this.isSuccess = false;
  }

  public onInputTypingChange(e: Event) {
    if (!this.target) this.target = e.target as HTMLInputElement;
    this.recentTypingValue = this.target.value;

    if (this.recentTypingValue === this.randomText) {
      this.isSuccess = true;
      this.target.disabled = true;
    }
  }
}
