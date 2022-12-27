import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

interface ColorCharacter {
  character: string;
  color: 'red' | 'green' | 'gray';
}

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
  reset: boolean = true;
  target: HTMLInputElement | null = null;
  checkCharacterList: ColorCharacter[] = [];

  public generateRandomText(): void {
    if (this.target) {
      this.target.disabled = false;
      this.target.value = '';
    }
    this.randomText = faker.lorem.sentence();
    this.isSuccess = false;
    this.reset = true;
  }

  public onInputTypingChange(e: Event) {
    this.reset = false;
    if (!this.target) this.target = e.target as HTMLInputElement;
    this.recentTypingValue = this.target.value;

    if (this.recentTypingValue === this.randomText) {
      this.isSuccess = true;
      this.target.disabled = true;
    }

    this.checkCharacterList = [];

    for (let i = 0; i < this.recentTypingValue.length; ++i) {
      if (this.recentTypingValue[i] === this.randomText[i]) {
        this.checkCharacterList.push({
          character: this.recentTypingValue[i],
          color: 'green',
        });
      } else
        this.checkCharacterList.push({
          character: this.randomText[i],
          color: 'red',
        });
    }

    // color gray the remain of random text when user doesn't typing yet
    this.checkCharacterList.push({
      character: this.randomText.substring(this.recentTypingValue.length),
      color: 'gray',
    });
  }
}
