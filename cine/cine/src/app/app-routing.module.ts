import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Views/contact/contact.component';
import { MoviesComponent } from './Views/movies/movies.component';
import { HomeComponent } from './Views/home/home.component';
import { AboutComponent } from './Views/about/about.component';
import { CartComponent } from './Views/cart/cart.component';
import { DestacadasComponent } from './Views/destacadas/destacadas.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'movies/:id', component: MoviesComponent }, 
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'carrito', component: CartComponent },
  { path: 'destacadas', component: DestacadasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
