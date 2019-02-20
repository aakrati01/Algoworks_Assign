import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserTwitterComponent } from './user-twitter/user-twitter.component';
import { HttpModule } from "@angular/http";
import { TwitterDataService } from "../app/service/twitter-data.service";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    UserTwitterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule
  ],
  exports:[
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [TwitterDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
