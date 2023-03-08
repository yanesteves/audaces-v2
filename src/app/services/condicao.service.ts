import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CondicaoService {

  constructor() { }

  public condition() {
    return true
  }
}
