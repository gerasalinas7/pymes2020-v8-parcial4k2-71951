import { Component, OnInit } from '@angular/core';
import { Contrato } from '../contrato';
import { ContratosService } from '../contratos.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {
  TituloAccionABMC = {
    A: "(Agregar)",
    B: "(Eliminar)",
    M: "(Modificar)",
    C: "(Consultar)",
    L: "(Listado)"
  };
  AccionABMC = "L"; 

  submitted = false;

  Items: Contrato[] = [];
  constructor(private contratosservice:  ContratosService) { }

  ngOnInit() {
        this.GetContratos();
  }

  GetContratos() {
    this.contratosservice.get()
    .subscribe((res:Contrato[]) => {
      this.Items = res;
    });
}
}