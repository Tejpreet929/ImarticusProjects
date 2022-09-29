import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { DbsService } from './dbs.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DbsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
