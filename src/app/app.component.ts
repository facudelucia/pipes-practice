import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Capitán América';
  arreglo = [1,2,3,4,5,6,7,8,9,10]
  nombre2 : string = "fACuNdO De LuCiA"
  videoUrl : string = "https://www.youtube.com/embed/_b-FdGeNcYo"
  Pi = Math.PI
  porcentaje = 0.234
  salario = 1234.5
  activar = true
  valorPromesa = new Promise((resolve)=>{
    setTimeout(() => {
      resolve("se resolvio la promesa")
    }, 3000);
  })
  fecha = new Date()
  idioma = "es"
  heroe = {
    nombre: "Logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: 20
    }
  }
}
