import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RegistrarRutaComponent } from './registrar-ruta/registrar-ruta.component';
import { MostrarRutasComponent } from './mostrar-rutas/mostrar-rutas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModificarRutaComponent } from './modificar-ruta/modificar-ruta.component';
import { RegistroHorarioComponent } from './registro-horario/registro-horario.component';
import { MostrarHorarioComponent } from './mostrar-horario/mostrar-horario.component';
import { ModificarHorarioComponent } from './modificar-horario/modificar-horario.component';

@NgModule({
  declarations: [
    
    RegistrarRutaComponent,
    AppComponent,
    MostrarRutasComponent,
    ModificarRutaComponent,
    RegistroHorarioComponent,
    MostrarHorarioComponent,
    ModificarHorarioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
