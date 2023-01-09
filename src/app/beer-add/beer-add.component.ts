import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {BeerService} from "../beer.service";

@Component({
  selector: 'app-beer-add',
  templateUrl: './beer-add.component.html',
  styleUrls: ['./beer-add.component.css']
})
export class BeerAddComponent  {

  constructor(private BeerService:BeerService) { }



  onSubmit(f: NgForm) {
    console.log(f.value);
   this.BeerService.create(f.value).subscribe()
  }
}
