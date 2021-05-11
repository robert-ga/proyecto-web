import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ruta, RutasService } from '../SERVICIOS/rutas.service';

@Component({
  selector: 'app-registrar-ruta',
  templateUrl: './registrar-ruta.component.html',
  styleUrls: ['./registrar-ruta.component.css']
})
export class RegistrarRutaComponent implements OnInit {
  ruta: Ruta={
    id_ruta:'',
    origen:'',
    destino:''
  };
  constructor(private RutasService:RutasService, private router:Router) { }

  ngOnInit(): void {
  }
  agregar(){
    //delete this.ruta.id_ruta;
    this.RutasService.addRuta(this.ruta).subscribe();
    this.router.navigate(['/Mostrar_Rutas']);
  }

}
