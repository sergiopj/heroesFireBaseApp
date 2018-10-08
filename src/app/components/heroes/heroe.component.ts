import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// interface
import { Hero } from '../../interfaces/hero.interface';


// services
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  // interface with data from form
  hero: Hero = {
    name: '',
    bio: '',
    house: ''
  };

  constructor(private _heroService: HeroesService) { }

  ngOnInit() {
  }


  save() {
    console.log('Hero', this.hero);
    this._heroService.newHero(this.hero)
        .subscribe( res => {
            console.log(res);
            // this.router.navigate(['/heroe', data['name'] ]);
        });
  }

}
