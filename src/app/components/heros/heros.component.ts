import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/Hero.services';
import { Router } from '@angular/router';
import { BaseDatosService } from 'src/app/services/baseDatos/base-datos.service';

// Decorador:
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  constructor( private heroService: HeroService, private _aRouter: Router, private heroeBase: BaseDatosService ) { }

  // ArrayHeros: any = [];

  heroes: any;

  // Se ejecuta cuando se termina de renderizar el componente.
  ngOnInit(): void {
    this.listaHeroes();
  }

  listaHeroes(){
    this.heroeBase.obtenerHeroes()
    .then((res: any) => {
      this.heroes = res
      console.log(this.heroes);
      // this.heroes = res.heroes;
    })
    .catch(err => {
      console.log('Ha ocurrido un error ', err);
    })
  }

  Navegar(index){
    console.log(index);
    this._aRouter.navigate(['../hero',index])
  }

}