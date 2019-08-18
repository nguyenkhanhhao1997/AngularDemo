import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class EmployeeService {
  private apiUrl = "http://5d454e84d823c30014771d3a.mockapi.io/employees/";
  constructor(private _http: HttpClient) {}
  getList(): Observable<any> {
    //phải map về json khi trả dữ liệu về
    return this._http.get(this.apiUrl).pipe(map(response => response));
  }

  getEmployee(id: number): Observable<any> {
    return this._http.get(this.apiUrl + id).pipe(map(response => response));
  }

  update(data: any): Observable<any> {
    return this._http
      .put(this.apiUrl + data.id, data)
      .pipe(map(response => response));
  }

  add(data: any): Observable<any> {
    return this._http.post(this.apiUrl, data).pipe(map(response => response));
  }

  delete(id: number): Observable<any> {
    return this._http.delete(this.apiUrl + id).pipe(map(response => response));
  }
}
