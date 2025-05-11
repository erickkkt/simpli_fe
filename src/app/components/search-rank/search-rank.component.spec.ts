import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRankComponent } from './search-rank.component';

describe('SearchRankComponent', () => {
  let component: SearchRankComponent;
  let fixture: ComponentFixture<SearchRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchRankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
