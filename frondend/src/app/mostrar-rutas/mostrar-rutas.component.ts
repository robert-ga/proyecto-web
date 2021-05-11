import { Component, OnInit } from '@angular/core';
import { RutasService, Ruta } from '../SERVICIOS/rutas.service';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-mostrar-rutas',
  templateUrl: './mostrar-rutas.component.html',
  styleUrls: ['./mostrar-rutas.component.css']
})
export class MostrarRutasComponent implements OnInit {
  
  RutasListas: Ruta[]=[];
  constructor(private RutasService:RutasService, private router:Router) { }
  filterPost ='';
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
  eliminar(id:string)
  {
    this.RutasService.deleteRuta(id).subscribe(
      res=>{
        console.log("ruta eliminada");
        this.listarRutas();
      },
      err=>console.log(err)
    );
  }
  modificar(id:string){
    this.router.navigate(['/Mostrar_Rutas/Modificar_Ruta/'+id])
  }
}
