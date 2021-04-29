import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-mostrar-rutas',
  templateUrl: './mostrar-rutas.component.html',
  styleUrls: ['./mostrar-rutas.component.css']
})
export class MostrarRutasComponent implements OnInit {

  constructor(private modal:NgbModal) { }

  ngOnInit(): void {
  }

}
