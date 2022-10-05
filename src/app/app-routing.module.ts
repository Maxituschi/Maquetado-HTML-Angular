import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionComponent } from './edicion/edicion.component';
import { IndexComponent } from './index/index.component';



const routes: Routes = [
  {path:'', component:IndexComponent},
  {path:'edicion', component:EdicionComponent},
 ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
