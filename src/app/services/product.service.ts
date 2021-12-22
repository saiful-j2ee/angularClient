import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  // {comment: 'ddsfsf'}
  saveProduct(data: any, file: any){
    const formData: FormData = new FormData();
    formData.append('productName', "fsdfds");
    formData.append('quantity', "10");
    formData.append('price', "10");
    formData.append('remarks', "fdsf sdfd sf dsf dsf ");
    formData.append('file', file);

    return this.http.post('http://localhost:8081/product/save2', formData);

  }

  getAll(){
    let header ={
      "Content-Type": "application/json"
    };
    return this.http.get('http://localhost:8081/product/getAll', {headers: header});

  }
}
