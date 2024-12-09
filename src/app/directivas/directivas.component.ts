import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas',
  imports: [],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  usuariologueado = true
  usuarios = [
    {
      id: 1,
      nombre: "Raul",
      sueldo: 1800.00,
      activo: true
    },
    {
      id: 2,
      nombre: "Ana",
      sueldo: 2100.50,
      activo: true
    },
    {
      id: 3,
      nombre: "Carlos",
      sueldo: 1500.75,
      activo: false
    },
    {
      id: 4,
      nombre: "Maria",
      sueldo: 3200.00,
      activo: true
    },
    {
      id: 5,
      nombre: "Luis",
      sueldo: 1700.30,
      activo: false
    },
    {
      id: 6,
      nombre: "Sofia",
      sueldo: 2500.00,
      activo: true
    },
    {
      id: 7,
      nombre: "Pedro",
      sueldo: 2000.00,
      activo: true
    },
    {
      id: 8,
      nombre: "Diana",
      sueldo: 1900.40,
      activo: false
    },
    {
      id: 9,
      nombre: "Jorge",
      sueldo: 3100.75,
      activo: true
    },
    {
      id: 10,
      nombre: "Guille",
      sueldo: 12000.75,
      activo: true
    }
  ]
}
