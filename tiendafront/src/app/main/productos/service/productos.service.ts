import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductosTO } from '../../interfaces/productosto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url: string = 'http://127.0.0.1:1900/api/productos';

  constructor(private _http:HttpClient) { }

  listarProductos() : Observable<ProductosTO[]>{
    return this._http.get<ProductosTO[]>(this.url);
  }
  guardar(productos: ProductosTO) : Observable<string>{
    return this._http.post<string>(this.url, productos);
  }
  modificar(productos: ProductosTO) : Observable<string>{
    return this._http.put<string>(this.url, productos);
  }
  eliminar(id: string) : Observable<string>{
    return this._http.post<string>(this.url, + "/" + id);
  }
}

