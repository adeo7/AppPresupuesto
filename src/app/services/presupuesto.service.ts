import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {
presupuesto: number;
restante: number;
private gastos$=new Subject<any>();
  constructor() {
    this.presupuesto=0;
    this.restante=0;
   }
   agregarGasto(gasto: any){
    this.restante= this.restante-gasto.cantidad;
    console.log(gasto);
    this.gastos$.next(gasto);
   }

   getGasto():Observable<any> {
    return this.gastos$.asObservable();
   }
}
