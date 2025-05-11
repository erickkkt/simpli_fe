import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchEngine } from '../../shared/enums/search-engine.enum';
import { SearchService } from '../../services/search.service';
import { SearchResult } from '../../models/search.model';

@Component({
  selector: 'app-search-rank',
  standalone: false,
  templateUrl: './search-rank.component.html',
  styleUrls: ['./search-rank.component.css']
})
export class SearchRankComponent {
  searchForm: FormGroup;
  searchEngines = SearchEngine.values();
  searchResults: string = '';
  isLoading: boolean = false; 

  constructor(private fb: FormBuilder, private searchService: SearchService) {
    this.searchForm = this.fb.group({
      keyword: ['', [Validators.required]],
      targetUrl: ['', [Validators.required, Validators.pattern(/https?:\/\/.+/)]],
      searchEngine: [this.searchEngines[1], [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      this.isLoading = true;
      const { keyword, targetUrl, searchEngine } = this.searchForm.value;
      this.performSearch(keyword, targetUrl, searchEngine);
    }
  }

  performSearch(keyword: string, targetUrl: string, searchEngine: SearchEngine): void {
    this.searchService.performSearch(keyword, targetUrl, searchEngine).subscribe(
      (result: SearchResult) => {
        this.searchResults = result.positions.length > 0 ? result.positions.join(', ') : "0";
        this.isLoading = false; 
      },
      (error) => {
        console.error('Search failed', error);
        this.searchResults = 'Error occurred during search';
        this.isLoading = false; 
      }
    );
  }
}
