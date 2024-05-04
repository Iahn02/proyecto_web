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
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[^@]+@[^@]*mail/)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return !!control && control.invalid && (control.dirty || control.touched);
  }


getErrorMessage(field: string): string {
  const control = this.contactForm.get(field);
  if (control && control.errors) {
    if (control.errors['required']) {
      return 'Este campo es obligatorio.';
    } else if (control.errors['email']) {
      return 'El correo electrónico no es válido.';
    } else if (control.errors['minlength']) {
      return `Este campo debe tener al menos ${control.errors['minlength'].requiredLength} caracteres.`;
    } else if (control.errors['pattern']) {
      return 'El correo electrónico debe contener "mail" después del "@".';
    }
  }
  return ''; 
}

}
