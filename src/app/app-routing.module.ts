import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Table1Component } from './table1/table1.component';

const routes: Routes = [
  { path: 'table1', component: Table1Component }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
