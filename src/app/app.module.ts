import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {BeerService} from "./beer.service";
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerUpdateComponent } from './beer-update/beer-update.component';
import { BeerAddComponent } from './beer-add/beer-add.component'
@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerUpdateComponent,
    BeerAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
