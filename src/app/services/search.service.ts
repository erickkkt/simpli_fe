import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/search.model';
import { SearchEngine } from '../shared/enums/search-engine.enum';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchQueryUrl = `${environment.apiUrl}/api/Search/v1`; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  performSearch(keywords: string, targetUrl: string, searchEngine: SearchEngine): Observable<SearchResult> {
    const searchUrl = `${this.searchQueryUrl}?keywords=${keywords}&targetUrl=${targetUrl}&searchEngine=${searchEngine}`;
    return this.http.get<SearchResult>(searchUrl);
  }
}
