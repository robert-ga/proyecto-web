import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService, Buses } from '../SERVICIOS/bus.service';
import { Ruta, RutasService } from '../SERVICIOS/rutas.service';

@Component({
  selector: 'app-registro-horario',
  templateUrl: './registro-horario.component.html',
  styleUrls: ['./registro-horario.component.css']
})
export class RegistroHorarioComponent implements OnInit {
  buses: Buses={
    id_bus:'',
    origenbus:'',
    destinobus:'',
    fecha:'',
    hora:'',
    nombrebus:'',
    tipobus:'',
    precio:''
    
  };
  RutasListas: Ruta[]=[];
  filterPost ='';
  constructor(private BusService:BusService, private router:Router,private RutasService:RutasService) { }

  ngOnInit(): void {
    this.listarRutas();
  }
  listarRutas()
  {
    this.RutasService.getRutas().subscribe(
      res=>{
        console.log(res)
        this.RutasListas=<any>res;
      },
      err=>console.log(err)
    );
  }
  agregar(){
    //delete this.ruta.id_ruta;
    this.BusService.addBus(this.buses).subscribe();
    this.router.navigate(['/Mostrar_Horario']);
  }

}
