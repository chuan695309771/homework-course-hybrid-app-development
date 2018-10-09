import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  constructor() {}
  arr = [];
  ngOnInit() {}
  counter: number = 0;
  count() {
    this.counter = 0;
    this.arr.forEach((value, index) => {
      if (value.done) {
        this.counter++;
      }
    });
  }
  getvalue(txt) {
    this.arr.unshift(txt);
    this.count();
  }
  change(i) {
    this.count();
  }
  delData(i) {
    console.log(i);
    this.arr.splice(i, 1);
    this.count();
  }
}
