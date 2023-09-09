import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gastos',
  templateUrl: './listar-gastos.component.html',
  styleUrls: ['./listar-gastos.component.css']
})
export class ListarGastosComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  presupuesto:number;
  restante:number;
  listaGastos: any[]=[];

  constructor(private _presupuestoService: PresupuestoService){
    this.presupuesto=0;
    this.restante=0;
    this.subscription=this._presupuestoService.getGasto().subscribe(data=>{
     this.restante=this.restante -data.cantidad;
      this.listaGastos.push(data);
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.presupuesto=this._presupuestoService.presupuesto;
    this.restante=this._presupuestoService.restante;
   
  }
  aplicarColorRestante(){
    if (this.presupuesto/4>this.restante) {
      return 'alert alert-danger';
    }else if(this.presupuesto/2>this.restante){
      return 'alert alert-warning';
    }else{
      return 'alert alert-secondary';
    }

  }
}
