import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

  getCategories() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://localhost:4000/categories/', { headers: headers });
  }

  saveCategories(categories: any) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:4000/categories/save', categories, { headers: headers });
  }

}
