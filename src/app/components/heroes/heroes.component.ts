import { Component, OnInit } from '@angular/core';
// services
import { HeroesService } from '../../services/heroes.service';
// interface
import { Hero } from '../../interfaces/hero.interface';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];
  loading: boolean;

  constructor(public _heroService: HeroesService) {
    this.loading = true; // loading data from firebase
    this.getHeroes();
  }

  ngOnInit() {
  }

  getHeroes() {
    this._heroService.getHeroes()
        .subscribe( (heroesData: any) => {
          this.heroes = heroesData;
          this.loading = false;
        }, err => console.log(err));
  }

  deleteHero(key$: string) {
    this._heroService.deleteHero(key$)
        .subscribe( resp => {
          console.log(resp);
        }, err => console.log(err));
    // delete hero or array
    delete this.heroes[key$];
  }

}
