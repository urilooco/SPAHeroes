import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  url = environment.url + '/heroes';
  url2 = environment.url + '/heroe/';

  constructor( private http: HttpClient ) { }

  obtenerHeroes(){
    return this.http.get(this.url).toPromise();
  }

  altaHeroe(heroe) {
    return this.http.post(this.url2, heroe).toPromise();
  }

  deleteHeroe(id: Number){
    return this.http.delete(`http://localhost:3000/heroe/${id}`).toPromise();
  }
  
  modificarHeroe(id, heroe: any){
    return this.http.put(`${this.url2}${id}`, heroe).toPromise();
  }

  obtenerHeroeID(id) {
    return this.http.get(`${this.url2}${id}`).toPromise();
  }

}
