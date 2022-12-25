import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'typing-challenge';
  length: number = 10;
  randomText: string = faker.lorem.paragraph();
  isSuccess: boolean = false;

  public generateRandomText(): void {
    this.randomText = faker.lorem.paragraph();
  }
}
