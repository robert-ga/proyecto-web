import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarRutaComponent } from './registrar-ruta/registrar-ruta.component';
import { MostrarRutasComponent } from './mostrar-rutas/mostrar-rutas.component';
import { ModificarRutaComponent } from './modificar-ruta/modificar-ruta.component';
import { MostrarHorarioComponent } from './mostrar-horario/mostrar-horario.component';
import { RegistroHorarioComponent } from './registro-horario/registro-horario.component';
import { ModificarHorarioComponent } from './modificar-horario/modificar-horario.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:"", redirectTo:'/inicio', pathMatch:'full'},
  {path:"inicio", component:InicioComponent},
  {path:"Registrar_Ruta", component:RegistrarRutaComponent},
  {path:"Mostrar_Rutas", component:MostrarRutasComponent},
  {path:"Registrar_Horario", component:RegistroHorarioComponent},
  {path:"Mostrar_Horario", component:MostrarHorarioComponent},
  {path:"Mostrar_Rutas/Modificar_Ruta/:id",component:ModificarRutaComponent},
  {path:"Mostrar_Horario/Modificar_Horario/:id", component:ModificarHorarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
