import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes:Routes= [
  {path: '',redirectTo: '/ingresarPresupuesto', pathMatch: 'full'},
  {path: 'ingresarPresupuesto',component:IngresarPresupuestoComponent },
  {path: 'gastos',component:GastosComponent },
  {path: '**',redirectTo: '/ingresarPresupuesto', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
