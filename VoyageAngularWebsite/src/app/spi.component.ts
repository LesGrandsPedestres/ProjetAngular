import {AfterViewInit, Component } from '@angular/core';
declare var appMaster: any;

@Component({
  selector: 'spi',
  templateUrl: './spi.component.html'
})
export class SpiComponent implements AfterViewInit {
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
