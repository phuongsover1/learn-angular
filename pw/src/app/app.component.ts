import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeCharacters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  password: string = 'initial password';
  onButtonClick(): void {
    this.password = 'MY PASSWORD!!!!';
  }

  onChangeUseCharacters(): void {
    this.includeCharacters = !this.includeCharacters;
    console.log(`include characters: ${this.includeCharacters}`);
  }

  onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  getName(): string {
    return 'Phuong Nguyen';
  }
}
