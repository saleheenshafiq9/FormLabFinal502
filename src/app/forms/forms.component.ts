import { Component, OnInit } from '@angular/core';
import { Profile } from '../input';
import { InputService } from '../input.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  profile = new Profile();
  constructor(private inputService: InputService) { }

  ngOnInit(): void {
  }
  profileNew(): void {
    this.inputService.profileNew(this.profile);
  }

  clearSearch(): void {
    
  }

}
