import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ParentComponent } from "./components/parent/parent.component";
import { ChildComponent } from "./components/child/child.component";

import { ChildSecondComponent } from "./components/child-second/child-second.component";

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ChildSecondComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
