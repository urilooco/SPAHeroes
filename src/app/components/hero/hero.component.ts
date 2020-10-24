import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroService } from 'src/app/services/Hero.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  hero:any = {};

  constructor( private aRoute:ActivatedRoute, private _heroService:HeroService, private _aRouter: Router) {
    this.aRoute.params.subscribe(params =>{
      console.log(params);
      this.hero = this._heroService.getHero(params['id'])
      console.log(this.hero);
    })
   }

  ngOnInit(): void {
  }

  Regresar(){
    this._aRouter.navigate(['../heros'])
  }

}

