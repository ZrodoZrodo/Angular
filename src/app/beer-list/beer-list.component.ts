import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/models/Beer';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {

  BeerList:Beer[]=[];
  Beer:Beer|null=null;
  BeerId:number=0;
  constructor(private BeerService:BeerService) { }

  ngOnInit(): void {
    this.BeerService.getAll().subscribe((beers)=>(this.BeerList=beers))
  }

  delete():void{
    this.BeerService.deleteOne(this.BeerId).subscribe(
      (deleted)=>{
        if(deleted)
        {
          this.BeerService.getAll().subscribe((beers)=>(this.BeerList=beers))
        }
      }
    )
  }



  setActualBeer(id:string):void{

    this.BeerId=Number(id);
    console.log(id)
  }

}
