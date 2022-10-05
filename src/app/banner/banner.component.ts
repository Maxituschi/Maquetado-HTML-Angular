import { Component, OnInit } from '@angular/core';
//importamos la ruta de la carpeta de servicios
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
// se define que dato va a tener la variable
   nombre: string = '';
   apellido: string = '';
   sobre: string = '';
   foto: string = '';
  

  constructor(
//se crea esta carpeta para que se puedan comunicar la carpeta de datos.json y banner.ts
    private datosService:DatosService) { }

  ngOnInit(): void {
  this.datosService.getDatos().subscribe(datos => {
    console.log(datos);
//el nombre datos es como se llama el archivo json(son todos los datos que conforman el archivo y de eso solo esta pidiendo el nombre)
    this.nombre=datos.nombre;
    this.apellido=datos.apellido;
    this.sobre=datos.sobre;
    this.foto=datos.foto;
    
    
  }) 

  }

}
