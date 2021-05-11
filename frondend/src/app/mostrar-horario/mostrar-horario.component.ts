import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService, Buses } from '../SERVICIOS/bus.service';


@Component({
  selector: 'app-mostrar-horario',
  templateUrl: './mostrar-horario.component.html',
  styleUrls: ['./mostrar-horario.component.css']
})
export class MostrarHorarioComponent implements OnInit {
  BusListas: Buses[]=[];
  constructor(private BusService:BusService, private router:Router) { }
  filterPost ='';
  ngOnInit(): void {
    this.listarBus();
  }
  listarBus()
  {
    this.BusService.getBuses().subscribe(
      res=>{
        console.log(res)
        this.BusListas=<any>res;
      },
      err=>console.log(err)
    );
  }
  eliminar(id:string)
  {
    this.BusService.deleteBus(id).subscribe(
      res=>{
        console.log("ruta eliminada");
        this.listarBus();
      },
      err=>console.log(err)
    );
  }
  modificar(id:string){
    this.router.navigate(['/Mostrar_Horario/Modificar_Horario/'+id])
  }

}
