export interface IProductosTO{
  descripcion: String;
  unidadMedida: String;
  tipoProducto: String;
  stock: String;
  valorVenta: String;
}

export class ProductosTO implements IProductosTO{
  public descripcion = "";
  public unidadMedida = "";
  public tipoProducto = "";
  public stock = "";
  public valorVenta = "";
}