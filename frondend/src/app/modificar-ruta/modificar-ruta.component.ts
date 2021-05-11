import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { Ruta, RutasService } from '../SERVICIOS/rutas.service';

@Component({
  selector: 'app-modificar-ruta',
  templateUrl: './modificar-ruta.component.html',
  styleUrls: ['./modificar-ruta.component.css']
})
export class ModificarRutaComponent implements OnInit {
  ruta: Ruta={
    id_ruta:'',
    origen:'',
    destino:''
  };
  constructor(private RutasService:RutasService, private router:Router, private activaRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <string>this.activaRoute.snapshot.params.id;
    console.log('ide de entrada'+ id_entrada);
    if(id_entrada){
      this.RutasService.getRuta(id_entrada).subscribe(
        res=>{
          let valores =JSON.stringify(res)
          let cadena=JSON.parse(valores)
          this.ruta.id_ruta=cadena[0].id_ruta
          this.ruta.origen=cadena[0].origen
          this.ruta.destino=cadena[0].destino
        },
        err=>console.log(err)
      );
    }
  }
  modificar()
  {
    this.RutasService.editRuta(this.ruta.id_ruta, this.ruta).subscribe(
      res=>{
        console.log(res);
      },
      err=>console.log(err)
    );
    this.router.navigate(['/Mostrar_Rutas'])
  }
}
