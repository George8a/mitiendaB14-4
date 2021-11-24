export interface IProductosTO{
  _id: String;
  descripcion: String;
  unidadMedida: String;
  tipoProducto: String;
  stock: String;
  valorVenta: String;
}

export class ProductosTO implements IProductosTO{
  public _id ="";
  public descripcion = "";
  public unidadMedida = "";
  public tipoProducto = "";
  public stock = "";
  public valorVenta = "";
}
