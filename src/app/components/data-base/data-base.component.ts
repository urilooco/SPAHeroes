import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseDatosService } from 'src/app/services/baseDatos/base-datos.service';

@Component({
  selector: 'app-data-base',
  templateUrl: './data-base.component.html',
  styles: [
  ]
})
export class DataBaseComponent implements OnInit {

  // variable para almacenar formulario
  form: FormGroup;
  formData: FormData;
  response: any = [];
  idHeroe: Number;

  her = {
    _id: null,
    nombre: null,
    bio: null,
    aparicion: null,
    casa: null,
    activo: null
  }

  heroes: any;

  mostrarActualizar: Boolean = false;
  mostrarRegistrar: Boolean = false;

  constructor(  private heroeBase: BaseDatosService ) { }

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

  mostrarAgregar() {
    this.mostrarRegistrar = true;
    this.mostrarActualizar = false;
  }

  altaHeroe(forma: any) {
    return this.heroeBase.altaHeroe(this.her).then((res: any) => {
      console.log(res);
      alert('Héroe insertado con éxito');
      forma.reset();
      this.ngOnInit();
      this.mostrarRegistrar = false;

    }).catch(err => {
      console.log(err);
      alert('Ocurrió un error');
    });
  }

  eliminarID(id: any) {
    this.heroeBase.deleteHeroe(id).then((resp: any) => {
      alert(resp.message)
      this.listaHeroes();
    }).catch((err) => {
      console.log(err);

    });

  }

  actualizarID(id: any) {
    console.log(id);
    this.idHeroe = id;
    this.listaHeroes();
    this.mostrarActualizar = false;
    this.mostrarActualizar = true;
    this.mostrarRegistrar = false;
  }

}
