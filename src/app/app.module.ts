import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'heros', component: HerosComponent},
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
