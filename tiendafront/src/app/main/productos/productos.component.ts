import { Component, OnInit } from '@angular/core';
import { ProductosTO } from '../interfaces/productosto.interface';
import { ProductosService } from './service/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private _productosService: ProductosService) { }

  listaProductos : ProductosTO[] = new Array<ProductosTO>();
  productos : ProductosTO = new ProductosTO();

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(){
    this._productosService.listarProductos().subscribe(
      data => {
        this.listaProductos = data;
      }
    );

}
  limpiarFormulario(){
    this.productos = new ProductosTO();
  }
  guardar(){
    if (this.productos._id == ""){
      this._productosService.guardar(this.productos).subscribe(
        data => {
          console.log(data);
          this.listarProductos();
          this.limpiarFormulario();
    }
  );
}else{
  this._productosService.modificar(this.productos).subscribe(
    data =>{
      console.log(data);
      this.listarProductos();
      this.limpiarFormulario();
    }
  )
}
}
  eliminar(id: string){
    this._productosService.eliminar(id).subscribe(
      data => {
        console.log(data);
        this.listarProductos();
      }
    );

  }
  mostrar(pProducto: ProductosTO){
    this.productos = pProducto;

  }
}
