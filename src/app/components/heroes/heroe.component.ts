import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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

  // to know if we are creating or updating the data of a hero in firebase
  public new: boolean;
  public heroId: string;

  constructor(private _heroService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute  ) {

      // get params of hero
      this.activatedRoute.params.subscribe( params => {
        console.log('params', params);
          if (params.id !== 'new') {
            this.heroId = params.id;
            this.getHero(this.heroId);
            this.new = false;
          } else {
            this.new = true;
          }
      });
  }

  ngOnInit() {
  }


  save() {

    if (this.new) {
      this._heroService.newHero(this.hero)
        .subscribe( res => {
            console.log(res);
            this.router.navigate(['/heroe', res['name'] ]);
        }, err => console.log(err));
    } else {
      this._heroService.updateHero(this.hero, this.heroId)
          .subscribe( res => {
            console.log(res);
          }, err => console.log(err));
    }

  }

  addNewHero(form: NgForm) {
    this.router.navigate(['/heroe', 'new']);
    form.reset({
      house: 'Marvel' // select marvel value in form
    });
  }

  getHero(heroId: string) {
    this._heroService.getHeroById(heroId)
        .subscribe( (hero: any) => {
          this.hero = hero;
          console.log('test', this.hero);
        }, err => console.log(err));
  }

}
