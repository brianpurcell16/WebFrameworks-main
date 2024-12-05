import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpHeaders,provideHttpClient } from '@angular/common/http';

import { HomeListComponent } from './home-list/home-list.component';

@NgModule({
  declarations: [
    HomeListComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
