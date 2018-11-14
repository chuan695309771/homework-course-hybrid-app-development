import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Action } from 'rxjs/scheduler/Action';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // @ViewChild('ac') ac;

  icons:string="camera";
  items = [];
  isActive = 0;
  isClick(i){
    this.isActive = i;
  }
  
  constructor(public navCtrl: NavController) {

  }
  // goSub(){
  //   this.navCtrl.push(APage,(id:1));
  // }
  // ionViewDidLoad(){
  //   this.
  // }
  
  // doInfinite(infiniteScroll){
  //   setTimeout(())
  // }
}
