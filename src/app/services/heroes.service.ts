import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public heroesUrl: string;

  constructor(private http: HttpClient) {
    this.heroesUrl = 'https://heroesapp-16d02.firebaseio.com/heroes.json';
  }

  newHero (hero: Hero) {

    const body = JSON.stringify(hero);
    const headers =  new HttpHeaders({
        'Content-Type':  'application/json',
    });
  

    // observable to know the result of the request
    return this.http.post(this.heroesUrl, body, {headers});

  }

}
