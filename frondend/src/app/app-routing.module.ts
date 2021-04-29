import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarRutaComponent } from './registrar-ruta/registrar-ruta.component';
import { MostrarRutasComponent } from './mostrar-rutas/mostrar-rutas.component';
import { ModificarRutaComponent } from './modificar-ruta/modificar-ruta.component';
import { MostrarHorarioComponent } from './mostrar-horario/mostrar-horario.component';
import { RegistroHorarioComponent } from './registro-horario/registro-horario.component';
import { ModificarHorarioComponent } from './modificar-horario/modificar-horario.component';

const routes: Routes = [
  {path:"Registrar_Ruta", component:RegistrarRutaComponent},
  {path:"Mostrar_Rutas", component:MostrarRutasComponent},
  {path:"Registrar_Horario", component:RegistroHorarioComponent},
  {path:"Mostrar_Horario", component:MostrarHorarioComponent},
  {path:"Mostrar_Rutas/Modificar_Ruta",component:ModificarRutaComponent},
  {path:"Mostrar_Horario/Modificar_Horario", component:ModificarHorarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
