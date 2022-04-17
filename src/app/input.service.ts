import { Injectable } from '@angular/core';
import { Profile } from './input';


@Injectable({
  providedIn: 'root'
})
export class InputService {
  profiles: Profile[] = [];
  constructor() { }

  profileNew(profile: Profile): void {
    this.profiles.push(profile);
  }
}

