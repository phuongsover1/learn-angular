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
  length: number = 0;
  password: string = 'initial password';
  isEnableBtn: boolean = false;

  checkEnableGenerateBtn(): void {
    if (this.length > 0) {
      if (
        this.includeNumbers ||
        this.includeCharacters ||
        this.includeSymbols
      ) {
        this.isEnableBtn = true;
      } else this.isEnableBtn = false;
    } else {
      this.isEnableBtn = false;
    }
  }

  onButtonClick(): void {
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

  onInputLength(event: Event): void {
    const target = event.target as HTMLInputElement;
    console.log(`inputLength: ${target.value}`);
    const parseNumber = Number.parseInt(target.value);
    if (!isNaN(parseNumber)) {
      this.length = parseNumber;
    } else this.length = 0;
    this.checkEnableGenerateBtn();
  }

  onChangeUseCharacters(): void {
    this.includeCharacters = !this.includeCharacters;
    this.checkEnableGenerateBtn();
  }

  onChangeUseNumbers(): void {
    this.includeNumbers = !this.includeNumbers;
    this.checkEnableGenerateBtn();
  }

  onChangeUseSymbols(): void {
    this.includeSymbols = !this.includeSymbols;
    this.checkEnableGenerateBtn();
  }

  getName(): string {
    return 'Phuong Nguyen';
  }
}
