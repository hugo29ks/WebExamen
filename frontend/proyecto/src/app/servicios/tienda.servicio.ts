import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class TiendaServicio {

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

  getTiendas() {
    let header = TiendaServicio.getCommonHeaders();
    return this.http.get("http://localhost:3000/Tienda",{headers: header});
  }

  getTiendaBuscar(nombreBuscar) {
    let header = TiendaServicio.getCommonHeaders();
    return this.http.get(`http://localhost:3000/Tienda/${nombreBuscar}` , {headers: header});
  }
}
