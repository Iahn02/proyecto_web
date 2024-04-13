import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Aquí iría el código para enviar los datos del formulario
    }
  }
  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  // Método para obtener el mensaje de error específico de un campo
// Método para obtener el mensaje de error específico de un campo
getErrorMessage(field: string): string {
  const control = this.contactForm.get(field);
  if (control && control.errors) {
    if (control.errors['required']) {
      return 'Este campo es obligatorio.';
    } else if (control.errors['email']) {
      return 'El correo electrónico no es válido.';
    } else if (control.errors['minlength']) {
      return `Este campo debe tener al menos ${control.errors['minlength'].requiredLength} caracteres.`;

    }
  }
  return ''; // Ensure a string is always returned
}

}
