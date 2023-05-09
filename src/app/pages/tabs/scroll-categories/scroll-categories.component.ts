import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-categories',
  templateUrl: './scroll-categories.component.html',
  styleUrls: ['./scroll-categories.component.scss'],
})
export class ScrollCategoriesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}
  
  slideOpts1 = {
    slidesPerView: 1.3,
  };


}
