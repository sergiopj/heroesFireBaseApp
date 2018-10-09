import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hero } from '../interfaces/hero.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public heroesUrl: string;
  public heroUrl: string;

  constructor(private http: HttpClient) {
    this.heroesUrl = 'https://heroesapp-16d02.firebaseio.com/heroes.json';
    this.heroUrl = 'https://heroesapp-16d02.firebaseio.com/heroes/';

  }

  newHero (hero: Hero) {

    const body = JSON.stringify(hero);
    const headers =  new HttpHeaders({
        'Content-Type':  'application/json',
    });

    // observable to know the result of the request
    return this.http.post(this.heroesUrl, body, {headers});

  }


  updateHero (hero: Hero, key$: string ) {

    const body = JSON.stringify(hero);
    const headers =  new HttpHeaders({
        'Content-Type':  'application/json',
    });

    // url of a specific hero
    const url = `${this.heroUrl}/${key$}.json`;

    // observable to know the result of the request
    return this.http.put(url, body, {headers});

  }

  getHeroById(key$: string) {
    // url of a specific hero
    const url = `${this.heroUrl}${key$}.json`;
    return this.http.get(url);
  }


  getHeroes() {
    return this.http.get(this.heroesUrl);
  }

  deleteHero(key$: string) {
    const url = `${this.heroUrl}${key$}.json`;
    return this.http.delete(url);
  }

}
