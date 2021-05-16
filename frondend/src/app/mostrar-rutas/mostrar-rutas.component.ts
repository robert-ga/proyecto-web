import { Component, OnInit } from '@angular/core';
import { RutasService, Ruta } from '../SERVICIOS/rutas.service';
import { Router, Routes } from '@angular/router';
import Swal from 'sweetalert2';
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
    Swal.fire({
      title: 'Esta seguro que desea eliminar la Ruta?',
      icon: 'warning',
      showDenyButton: true,
      confirmButtonText: `Eliminar`,

      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.RutasService.deleteRuta(id).subscribe(
          res=>{
            console.log("ruta eliminada");
            this.listarRutas();
          },
          err=>console.log(err)
        );
        Swal.fire('Se elimino la Ruta', '', 'success')
      }
    })
    
  }
  modificar(id:string){
    this.router.navigate(['/Mostrar_Rutas/Modificar_Ruta/'+id])
  }
}
