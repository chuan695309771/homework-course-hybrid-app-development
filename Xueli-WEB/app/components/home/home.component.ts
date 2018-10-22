import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userName:string = '4-李润川';
  FansCount:number = 0;
  FollowCount:number = 1;

  UnsubmittedCount:number = 0;
  CompletedCount:number = 10;
  FinishedCount:number = 0;

}
