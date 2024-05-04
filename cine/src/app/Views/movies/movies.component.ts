import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../services/ticket.service'; 
import { MovieService } from '../../services/movies.service'; 

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

  featuredMovies: any[] = []; 

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private ticketService: TicketService, private movieService: MovieService) { } 
  
  ngOnInit(): void {
    this.loadFeaturedMovies();
    this.getMovie();
  }

  loadFeaturedMovies(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.featuredMovies = movies;
      console.log(movies);
      this.getMovie(); 
    });
  }

  getMovie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movie = this.featuredMovies.find(movie => movie.id === Number(id));
    if (this.movie && this.movie.trailerUrl) {
      this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailerUrl);
    }
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
