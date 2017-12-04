import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
})
export class FormComponent {
  name = 'Angular';

  username: string;

  constructor(private router: Router) {}

  isLogged(): boolean {
    return (this.username = localStorage.getItem('username')) != null;
  }

  navigate(destination: string){
    this.router.navigateByUrl(destination);
  }
}
