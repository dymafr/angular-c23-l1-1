import { Component, NgModule } from "@angular/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "my-app",
  template: `
    <mat-checkbox>Cocher !</mat-checkbox>
  `
})
export class AppComponent {}

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, MatCheckboxModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
