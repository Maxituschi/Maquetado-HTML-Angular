import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RedesComponent } from './menu/redes/redes.component';
import { BannerComponent } from './banner/banner.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EdicionComponent } from './edicion/edicion.component';

import { IndexComponent } from './index/index.component';
import { NavbaredicionComponent } from './navbaredicion/navbaredicion.component';
import { ExperienciaedicionComponent } from './experienciaedicion/experienciaedicion.component';
import { EducacionedicionComponent } from './educacionedicion/educacionedicion.component';
import { HabilidadesedicionComponent } from './habilidadesedicion/habilidadesedicion.component';
import { ProyectosedicionComponent } from './proyectosedicion/proyectosedicion.component';
import { FooterComponent } from './footer/footer.component';

import { BanneredicionComponent } from './banneredicion/banneredicion.component';
import { RedesedicionComponent } from './menu/redesedicion/redesedicion.component';
import { ModalloginComponent } from './modallogin/modallogin.component';
import { ModalhabilidadesComponent } from './modalhabilidades/modalhabilidades.component';
import { ModalexperienciaComponent } from './modalexperiencia/modalexperiencia.component';
import { ModaleducacionComponent } from './modaleducacion/modaleducacion.component';
import { ModalproyectosComponent } from './modalproyectos/modalproyectos.component';
import { FooteredicionComponent } from './footeredicion/footeredicion.component';
import { ModalperfilComponent } from './modalperfil/modalperfil.component';
import { ModalbannerComponent } from './modalbanner/modalbanner.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    RedesComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    EdicionComponent,
    IndexComponent,
    NavbaredicionComponent,      
    ExperienciaedicionComponent,
    EducacionedicionComponent,
    HabilidadesedicionComponent,
    ProyectosedicionComponent,
    FooterComponent,    
    BanneredicionComponent,
    RedesedicionComponent,
    ModalloginComponent,
    ModalhabilidadesComponent,
    ModalexperienciaComponent,
    ModaleducacionComponent,
    ModalproyectosComponent,
    FooteredicionComponent,
    ModalperfilComponent,
    ModalbannerComponent,
   
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  //este campo tambien se llena con service
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
