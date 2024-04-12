export interface Ticket {
    Id: number;
    movieName: string;
    type: 'child' | 'adult';
    quantity: number;
  }