import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service'; 

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0;
  pagoRealizado: boolean = false; 

  constructor(private cartService: TicketService) { }

  ngOnInit(): void {
    this.getCartItems();
    this.calculateTotal(); 
  }

  getCartItems(): void {
    this.cartItems = this.cartService.getTickets();
    this.calculateTotal();
  }

  removeItemFromCart(itemId: number): void {
    this.cartService.removeItem(itemId);
    this.getCartItems(); 
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => {
      let price;
      if (item.type === 'child') {
        price = 3000;
      } else if (item.type === 'adult') {
        price = 7000;
      } else {
        console.error('Tipo de item desconocido', item);
        return acc; 
      }
      const quantity = parseInt(item.quantity);
  
      if (!isNaN(quantity)) {
        return acc + (price * quantity);
      } else {
        
        console.error('Se encontró un item con quantity no numérico', item);
        return acc; 
      }
    }, 0);
  }

  pagarAhora(): void {
    this.pagoRealizado = !this.pagoRealizado; 
  }
}
