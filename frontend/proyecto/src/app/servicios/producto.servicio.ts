import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ProductoServicio {

  constructor(private http:HttpClient) {

  }

  static getCommonHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");
    headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    headers.append("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Access-Control-Allow-Methods");
    return headers;
  }

  getProductos() {
    let header = ProductoServicio.getCommonHeaders();
    return this.http.get("http://localhost:3000/Producto",{headers: header});
  }

  getProductoBuscar(nombreBuscar) {
    let header = ProductoServicio.getCommonHeaders();
    return this.http.get(`http://localhost:3000/Producto/${nombreBuscar}` , {headers: header});
  }
}
