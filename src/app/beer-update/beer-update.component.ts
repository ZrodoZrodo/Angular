import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Beer } from 'src/models/Beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-update',
  templateUrl: './beer-update.component.html',
  styleUrls: ['./beer-update.component.css']
})
export class BeerUpdateComponent implements OnInit {
  BeerList:Beer[]=[];
  Beer:Beer|null=null;



  constructor(private BeerService:BeerService) { }

  ngOnInit(): void {
    this.BeerService.getAll().subscribe((beers)=>(this.BeerList=beers))
  }

  Update(beer:Beer):void{
    this.BeerService.updateOne(beer).subscribe(
      (updated)=>{
        if(updated)
        {
          this.BeerService.getAll().subscribe((beers)=>(this.BeerList=beers))
        }
      }
    )
  }

  setActualBeer(id:string):void{
    let beer=this.BeerList.filter(x=>x.id==Number(id))
    this.Beer=beer[0];
    console.log(this.Beer)
  }

  onSubmit(f: NgForm) {
    console.log(f.value);

    if (this.Beer) {
      this.Beer={...f.value,id:this.Beer.id}as Beer;
      this.BeerService.updateOne(this.Beer).subscribe(
        (updated) => {
          if (updated) {
            this.Beer=null
            this.BeerService.getAll().subscribe((beers) => (this.BeerList = beers))
          }
        }
      )

    }

  }

}
