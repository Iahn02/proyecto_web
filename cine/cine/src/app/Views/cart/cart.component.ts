import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../services/ticket.service'; // Asegúrate de tener este servicio creado

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  total: number = 0; // Se añade una propiedad para almacenar el total
  pagoRealizado: boolean = false; // Se añade una propiedad para controlar el estado del pago

  constructor(private cartService: TicketService) { }

  ngOnInit(): void {
    this.getCartItems();
    this.calculateTotal(); // Se llama a calculateTotal para inicializar el total
  }

  getCartItems(): void {
    this.cartItems = this.cartService.getTickets();
    this.calculateTotal(); // Se recalcula el total cada vez que se obtienen los items
  }

  removeItemFromCart(itemId: number): void {
    this.cartService.removeItem(itemId);
    this.getCartItems(); // Actualiza la lista de items en el carrito después de eliminar uno
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
        return acc; // Continúa sin incluir este item en el total si el tipo es desconocido
      }
      const quantity = parseInt(item.quantity);
  
      if (!isNaN(quantity)) {
        return acc + (price * quantity);
      } else {
        // Manejar adecuadamente los casos donde quantity no es un número
        console.error('Se encontró un item con quantity no numérico', item);
        return acc; // Continúa sin incluir este item en el total
      }
    }, 0);
  }

  pagarAhora(): void {
    this.pagoRealizado = !this.pagoRealizado; // Cambia el estado de pagoRealizado cada vez que se presiona el botón
  }
}
