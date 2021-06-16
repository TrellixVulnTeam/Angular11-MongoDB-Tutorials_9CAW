import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({ providedIn: 'root' })
export class TutorialService {

  constructor(private http: HttpClient) { }

  // Get all Tutorials
  getAll(): Observable<Tutorial[]> { return this.http.get<Tutorial[]>(baseUrl); }

  // Get Tutorial by id
  get(id: any): Observable<Tutorial> { return this.http.get(`${baseUrl}/${id}`); }

  // Create a new Tutorial
  create(data: any): Observable<any> { return this.http.post(baseUrl, data); }

  // Change an existing Tutorial
  update(id: any, data: any): Observable<any> { return this.http.put(`${baseUrl}/${id}`, data); }

  // Delete an existing Tutorial
  delete(id: any): Observable<any> { return this.http.delete(`${baseUrl}/${id}`); }

  // Delete all existing Tutorials
  deleteAll(): Observable<any> { return this.http.delete(baseUrl); }

  // Get a Tutorial by its title
  findByTitle(title: any): Observable<Tutorial[]> { return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`); }

}
