import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {


  // any se usa para englobar todos tipos de datos, en este caso como es un array se inicializa solo el nombre del array
  educacion: any = [];
  
  
//se crea esta carpeta para que se puedan comunicar la carpeta de datos.json y banner.ts
  constructor(private datosService:DatosService) { }

  ngOnInit(): void {

    this.datosService.getDatos().subscribe(datos => {
      
  //el nombre datos es como se llama el archivo json(son todos los datos que conforman el archivo y de eso solo esta pidiendo el nombre)
     this.educacion=datos.educacion;
       

  })

  }
}
