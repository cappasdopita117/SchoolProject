import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TsService {

  constructor() { }

  getRandomTsCode(): string {
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * possibleChars.length);
      code += possibleChars.charAt(randomIndex);
    }
    return code;
  }
}