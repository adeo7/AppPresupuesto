import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent {
nombreGasto: String;
cantidad: number;
formularioIncorrecto: Boolean;
texIncorrecto: String;

constructor( private _presupuestoService:PresupuestoService){
  this.nombreGasto="";
  this.cantidad=0;
  this.formularioIncorrecto=false;
  this.texIncorrecto= 'Nombre gasto o cantidad incorrecta';
}

agregarGasto(){
if (this.cantidad>this._presupuestoService.restante) {
  this.formularioIncorrecto=true;
  this.texIncorrecto='Cantidad mayor a tu presupuesto'
  return;
} 

if (this.nombreGasto==''|| this.cantidad<=0) {
  this.formularioIncorrecto=true;
  this.texIncorrecto= 'Nombre gasto o cantidad incorrecta';
}else{
  const GASTO={
    nombre: this.nombreGasto,
    cantidad: this.cantidad
  }
  this._presupuestoService.agregarGasto(GASTO);

  this.formularioIncorrecto=false;
  this.nombreGasto='';
  this.cantidad=0;
}

}
}
