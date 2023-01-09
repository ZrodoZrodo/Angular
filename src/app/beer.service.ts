import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Beer} from "../models/Beer";

@Injectable({
  providedIn: 'root'
})
export class BeerService {
  private baseUrl='http://localhost:5555/api/beer/'
  constructor(private http:HttpClient) { }

  getAll():Observable<Beer[]>{
    return this.http.get<Beer[]>(this.baseUrl)
  }

  getOne(id:number):Observable<Beer>{
    return this.http.get<Beer>(this.baseUrl + id)
  }

  deleteOne(id:number):Observable<boolean>{
    return this.http.delete<boolean>(this.baseUrl +id)
  }

  updateOne(beer:Beer):Observable<boolean>{
    return this.http.put<boolean>(this.baseUrl,beer)
  }

  create(beer:Beer):Observable<boolean>{
    return this.http.post<boolean>(this.baseUrl,beer)
  }

}
