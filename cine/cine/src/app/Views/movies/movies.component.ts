import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../services/ticket.service'; 

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: any;
  safeTrailerUrl: SafeResourceUrl | null = null;
  showTrailer: boolean = true; 
  type: string = ''; 
  quantity: number = 1; 

  featuredMovies: any[] = [
    {
        id: 1,
        title: 'Kung Fu Panda 4',
        description: 'Esta es una breve descripción de Kung Fu Panda 4',
        imageUrl: 'WhatsApp Image 2024-04-05 at 20.27.48.jpeg',
        genre: 'Animación',
        year: 2024,
        duration: 95,
        director: 'Jennifer Yuh Nelson',
        actors: ['Jack Black', 'Angelina Jolie', 'Dustin Hoffman'],
        synopsis: 'Po se enfrenta a una nueva amenaza y debe buscar dentro de sí para encontrar la fuerza necesaria para superarla.',
        trailerUrl: 'assets/Imagenes/Kung Fu Panda 4 _ Tráiler Oficial (Universal Pictures) - HD.mp4'
      },
      {
        id: 2,
        title: 'Dune',
        description: 'Esta es una breve descripción de Dune',
        imageUrl: 'WhatsApp Image 2024-04-05 at 20.27.44.jpeg',
        genre: 'Ciencia Ficción',
        year: 2021,
        duration: 155,
        director: 'Denis Villeneuve',
        actors: ['Timothée Chalamet', 'Zendaya', 'Oscar Isaac'],
        synopsis: 'Paul Atreides debe viajar al planeta más peligroso del universo para asegurar el futuro de su familia y su pueblo.',
        trailerUrl: 'assets/Imagenes/Duna - Trailer Oficial.mp4'
  
      },
      {
        id: 3,
        title: 'BagHead',
        description: 'Esta es una breve descripción de BagHead',
        imageUrl: 'WhatsApp Image 2024-04-05 at 20.27.40.jpeg',
        genre: 'Terror',
        year: 2023,
        duration: 89,
        director: 'Alberto Corredor Marina',
        actors: ['Freya Allan', 'Ruby Barker', 'Peter Lanzani'],
        synopsis: 'Una entidad misteriosa con una bolsa en la cabeza aterroriza a aquellos que se atreven a enfrentarlo.',
        trailerUrl: 'assets/Imagenes/BAGHEAD _ Official Trailer _ STUDIOCANAL.mp4'
      },
  ];

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private ticketService: TicketService) { } 
  
  ngOnInit(): void {
    this.getMovie();
    this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerUrl);
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie = this.featuredMovies.find(movie => movie.id === Number(id));
  }

  buyTicket(): void {
    const ticketType: 'child' | 'adult' = (this.type === 'child' || this.type === 'adult') ? this.type : 'adult'; 
  
    const ticket = {
      Id: this.movie.id,
      movieName: this.movie.title, 
      type: ticketType,
      quantity: this.quantity
    };
  
    this.ticketService.buyTicket(ticket); 
    alert('Ticket comprado con éxito'); 
  console.log('Tickets disponibles:', this.ticketService.getTickets());

  }
}
