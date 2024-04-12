import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private tickets: Ticket[] = [];

  constructor() {
    this.loadTickets();
  }

  loadTickets(): void {
    const savedTickets = localStorage.getItem('tickets');
    if (savedTickets) {
      this.tickets = JSON.parse(savedTickets);
    }
  }

  saveTickets(): void {
    localStorage.setItem('tickets', JSON.stringify(this.tickets));
  }

  buyTicket(ticket: Ticket): void {
    // Genera un ID único para el ticket. Esto es solo un ejemplo y puede ser mejorado.
    ticket.Id = new Date().getTime();
    
    this.tickets.push(ticket);
    this.saveTickets();
  }

  getTickets(): Ticket[] {
    return this.tickets;
  }

  removeItem(itemId: number): void {
    this.tickets = this.tickets.filter(ticket => ticket.Id !== itemId);
    this.saveTickets();
  }
}