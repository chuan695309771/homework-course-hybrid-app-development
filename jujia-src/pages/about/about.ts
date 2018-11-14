import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Slides) slides:Slides;
  constructor(public navCtrl: NavController,public navParams: NavParams) {

  }
  ionViewDidload() {
    console.log('ionViewDidload MinePage');
    console.log(this.slides.getActiveIndex());
  }
}
