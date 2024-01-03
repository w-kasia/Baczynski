import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [SearchComponent]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the search component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search text when onSearchTextChanged is called', () => {
    spyOn(component.searchTextChanged, 'emit');

    component.enteredSearchValue = 'test';
    component.onSearchTextChanged();

    expect(component.searchTextChanged.emit).toHaveBeenCalledWith('test');
  });
});
