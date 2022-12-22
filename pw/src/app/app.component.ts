import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public includeCharacters: boolean = false;
  public includeNumbers: boolean = false;
  public includeSymbols: boolean = false;
  public length: number = 0;
  public password: string = '';

  public onButtonClick(): void {
    const numbers: string = '0123456789';
    const characters: string = 'abcdefghijklmnopqrstuvwyz';
    const symbols: string = '!@#$%^&*()';

    let validChars = '';
    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeCharacters) {
      validChars += characters;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let randomIndex: number = 0;
    let generatedPassword: string = '';
    for (let i = 0; i < this.length; ++i) {
      randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[randomIndex];
    }

    this.password = generatedPassword;
  }

  public onInputLength(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log(`inputLength: ${target.value}`);
    const parseNumber = Number.parseInt(target.value);
    if (!isNaN(parseNumber)) {
      this.length = parseNumber;
    } else this.length = 0;
  }

  public onChangeUseCharacters(): void {
    this.includeCharacters = !this.includeCharacters;
  }

  public onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  public onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
  }

  public getName(): string {
    return 'Phuong Nguyen';
  }
}
