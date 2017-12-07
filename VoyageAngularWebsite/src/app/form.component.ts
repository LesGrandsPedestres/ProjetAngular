import {Component, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";
declare var appMaster: any;

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements AfterViewInit {
  name = 'Angular';

  username: string;

  constructor(private router: Router) {}

  isLogged(): boolean {
    return (this.username = localStorage.getItem('username')) != null;
  }

  navigate(destination: string){
    this.router.navigateByUrl(destination);
  }

  ngAfterViewInit() {
    appMaster.smoothScroll();
    appMaster.reviewsCarousel();
    appMaster.screensCarousel();
    appMaster.animateScript();
    appMaster.revSlider();
    appMaster.scrollMenu();
    appMaster.placeHold();
  }
}
