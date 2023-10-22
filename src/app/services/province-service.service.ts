import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private host = "https://provinces.open-api.vn/api/";
  constructor(private http: HttpClient) { }

  getProvinces() {
    return this.http.get('https://provinces.open-api.vn/api/?depth=1');
  }

  getDistricts(provinceCode: string) {
    return this.http.get('https://provinces.open-api.vn/api/p/' + provinceCode + '?depth=3');
  }

  getWards(districtCode: string) {
    return this.http.get('https://provinces.open-api.vn/api/d/' + districtCode + '?depth=3');
  }
  callAPI(depth: number): Observable<any> {
    const api = `${this.host}?depth=${depth}`;
    return this.http.get(api);
  }

  callApiDistrict(provinceCode: string): Observable<any> {
    const api = `${this.host}p/${provinceCode}?depth=2`;
    return this.http.get(api);
  }

  callApiWard(districtCode: string): Observable<any> {
    const api = `${this.host}d/${districtCode}?depth=2`;
    return this.http.get(api);
  }
}