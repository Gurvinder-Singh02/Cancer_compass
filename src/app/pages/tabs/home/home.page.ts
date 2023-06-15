import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  option={
    slidesPerView: 1.3,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 6000,
    },
  }

  popularItems: any[] = [];
  featuredItems: any[] = [];

  constructor(public apiService: ApiService ,private toastController: ToastController) { }

  ngOnInit() {
    this.popularItems = this.apiService.items;
    this.featuredItems = this.apiService.items;
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: ' Comming soon !!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

}
