import { HttpClient } from "@angular/common/http";
import { lastValueFrom, Observable } from "rxjs";
import { ProductType } from "../models/product-type";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  private readonly _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  public getAll(): Promise<ProductType[]> {
    const observable = this._http.get<ProductType[]>('/api/productTypes');
    return lastValueFrom(observable);
  }

  public add(productType: ProductType): Observable<ProductType> {
    return this._http.post<ProductType>('/api/productTypes', productType);
  }

  public get(id: number): Observable<ProductType> {
    return this._http.get<ProductType>(`/api/productTypes/${id}`);
  }

  public update(productType: ProductType): Observable<ProductType> {
    return this._http.put<ProductType>(`/api/productTypes/${productType.id}`, productType);
  }

  public delete(id: number): Promise<ProductType> {
    const observable = this._http.delete<ProductType>(`/api/productTypes/${id}`);
    return lastValueFrom(observable);
  }
}
