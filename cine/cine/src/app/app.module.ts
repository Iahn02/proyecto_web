import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; 
import { ContactComponent } from './Views/contact/contact.component';
import { CarouselComponent } from './shared/carousel/carousel.component'; 
import { HomeComponent } from './Views/home/home.component';
import { TicketService } from './services/ticket.service';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './Views/movies/movies.component';
import { CartComponent } from './Views/cart/cart.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DestacadasComponent } from './Views/destacadas/destacadas.component';
import { FooterComponent } from './shared/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CarouselComponent,
    NavbarComponent,
    HomeComponent,
    DestacadasComponent,
    FooterComponent,
    MoviesComponent,
    CartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
