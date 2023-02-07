import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  setItem(key: string, value: string) {
    window.localStorage.setItem(key, value)
  }

  getItem(key: string) {
    return window.localStorage.getItem(key);
  }
  removeItem(key: string) {
    window.localStorage.removeItem(key);
    return true;
  }

  clear() {
    window.localStorage.clear();
  }
}
