import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  // constructor(private articleService:NewsapiService) { 
  //   articleService.getArticleByCategory().subscribe((results)=> {
  //     console.log(results);
  //   })
  // }

  constructor(private toastController: ToastController) { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Feature Comming soon !',
      duration: 1500,
      position: position
    });

    await toast.present();
  }

  custom_img = true;

  onclick(){
    this.custom_img= !this.custom_img ;
  }

  lastEmittedValue: RangeValue = 500;

  onIonChange(ev: Event) {
    this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
  }
  

  ngOnInit() {

  }

}
