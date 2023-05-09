import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  constructor(public apiService: ApiService) { }

  searchTerm : string = '';
  featuredItems: any[] = [];

  custom_slide={
    // loop : true,
    freeMode:true,
    slidesPerView : 3.5,
    slidesOffsetBefore : 11,
    spaceBetween : 10,
    autoplay: {
      delay: 2000,
    },
  }
  ngOnInit() {
    this.featuredItems = this.apiService.items;
  }
  

}


