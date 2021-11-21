import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { ProductosService } from './productos/service/productos.service';


@NgModule({
  declarations: [
    ProductosComponent
  ],
  providers:[
    ProductosService
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
