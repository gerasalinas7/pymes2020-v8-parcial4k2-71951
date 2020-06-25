import { Component, OnInit } from '@angular/core';
import { Contrato } from '../contrato';
import { ContratosService } from '../contratos.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  FormReg: FormGroup;
  constructor(private contratosservice:  ContratosService, public formBuilder: FormBuilder) { }

  ngOnInit() {
        this.GetContratos();

        
    this.FormReg = this.formBuilder.group({
      IdContrato: [0],

      ContratoDescripcion: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(55)]
      ],

      ContratoImporte: [null, [Validators.required, Validators.pattern("[0-9]{1,7}")]]
    });
  }

  GetContratos() {
    this.contratosservice.get()
    .subscribe((res:Contrato[]) => {
      this.Items = res;
    });
}

  Agregar() {
    this.AccionABMC = "A";
    //this.FormReg.reset(this.FormReg.value);
    this.FormReg.reset();
    //this.FormReg.controls['IdEmpresa'].setValue(0);

    this.submitted = false;
    //this.FormReg.markAsPristine();
    this.FormReg.markAsUntouched();
  }

    Cancelar() {
    this.AccionABMC = "L";
    this.submitted = false;

    this.GetContratos();
  }


}