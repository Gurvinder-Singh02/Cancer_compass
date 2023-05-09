import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  item: any;

  option1={
    autoplay: {
      delay: 2000,
    },
  }

  option2={
    slidesPerView: 2.8,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
    },
  }

  logScrollStart(event: any) {
    console.log("logScrollStart : When Scroll Starts", event);
  }

  logScrolling(event: any) {
    console.log("logScrolling : When Scrolling", event);
  }

  logScrollEnd(event: any) {
    console.log("logScrollEnd : When Scroll Ends", event);
  }
  
  @ViewChild(IonContent, { static: false })content!: IonContent;

  ScrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  ScrollToPoint(X:any, Y:any) {
    this.content.scrollToPoint(X, Y, 1500);
  }
  scrollToLabel(label: string)
    {
      var id = document.getElementById(label)!;
      this.content.scrollToPoint(0,id.offsetTop-10,500)
    }

// to go to the end of label
 scrollToBottomLabel(label: string)
    {
      var id1 = document.getElementById(label)!;
      this.content.scrollToPoint(0,id1.offsetTop-0,700)
    }
  constructor(
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.route.paramMap.pipe(take(1)).subscribe(paramMap => {
      console.log(paramMap);
      if (!paramMap.has('id')) {
        this.navCtrl.back();
        return;
      }
      const id = paramMap.get('id');
      console.log(id);
      this.item = this.apiService.getItem(id);
      console.log(this.item);
    })
  }

}
