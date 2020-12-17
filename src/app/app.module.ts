import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Para trabajar con formularios
import { FormsModule } from '@angular/forms';
// Para trabajar con formularios reactivos
import { ReactiveFormsModule } from '@angular/forms';

// import { HttpClient } from '@angular/common/http';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { HerosComponent } from './components/heros/heros.component';
import { AboutComponent } from './components/about/about.component';

// Rutas
import { provideRoutes, RouterModule } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { HeroComponent } from './components/hero/hero.component';
import { BuscadorComponent } from './components/buscador/buscador.component'
import { HttpClientModule } from '@angular/common/http';
import { DataBaseComponent } from './components/data-base/data-base.component';
import { ModificarHeroeComponent } from './components/modificar-heroe/modificar-heroe.component';
import { NoImagePipe } from './pipes/no-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HerosComponent,
    AboutComponent,
    Error404Component,
    HeroComponent,
    BuscadorComponent,
    DataBaseComponent,
    ModificarHeroeComponent,
    NoImagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'heros', component: HerosComponent},
    {path: 'data-base', component: DataBaseComponent},
    {path: 'about', component: AboutComponent},
    {path: 'hero/:id', component: HeroComponent},
    {path: 'results/:termino', component:BuscadorComponent},
    {path: '**', pathMatch: 'full', component: Error404Component} 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
