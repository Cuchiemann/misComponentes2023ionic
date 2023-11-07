import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente} from "../common/interfaces";
import {ApiPelicula} from "../common/peliculas";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getComponente(): Observable<Componente[]>{
    return this.http.get<Componente[]>(
      '/assets/data/menu.json'
    )
  }

  loadMovie(page : number): Observable<ApiPelicula>{
    return this.http.get<ApiPelicula>(environment.baseURL + '/movie/popular?api_key=' + environment.apiKey + '&page=' + page)
  }
}
