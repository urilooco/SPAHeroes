import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseDatosService } from 'src/app/services/baseDatos/base-datos.service';

@Component({
  selector: 'app-modificar-heroe',
  templateUrl: './modificar-heroe.component.html',
  styles: [
  ]
})
export class ModificarHeroeComponent implements OnInit {

  form: FormGroup;
  formData: FormData;
  response: any = [];
  submited: boolean = false;
  idHeroeActualizado: any;

  @Input() set idHeroe(value) {
    this.idHeroeActualizado = value;
    this.ngOnInit();
  };

  her = {
    _id: null,
    nombre: null,
    bio: null,
    aparicion: null,
    casa: null,
    activo: null
  }

  heroe: any;

  constructor( private heroeBase: BaseDatosService ) { }

  ngOnInit(): void {
    console.log(this.idHeroe, 'Este es el componente actualizar');
    this.obtenerHeroe();
  }

  obtenerHeroe(){
    this.heroeBase.obtenerHeroeID(this.idHeroeActualizado)
    .then((resp: any) => {
      this.heroe = resp;
      console.log(this.heroe);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  modificarHeroe(){
    console.log(this.idHeroe);

    return this.heroeBase.modificarHeroe(this.idHeroeActualizado, this.heroe)
    .then((res: any) => {
      console.log(res);
      alert(res.message);
      this.ngOnInit();
    })
    .catch(err => {
      console.log(err);
      alert('Ocurrió un error al actualizar héroe');
    })
  }

}
