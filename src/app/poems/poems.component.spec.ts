import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoemsComponent } from './poems.component';
import { WorksService } from '../works.service';
import { Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PoemsComponent', () => {
  let component: PoemsComponent;
  let fixture: ComponentFixture<PoemsComponent>;
  let worksService: WorksService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [PoemsComponent, SearchComponent],
      providers: [WorksService, { provide: Router, useValue: {} }]
    });
    fixture = TestBed.createComponent(PoemsComponent);
    component = fixture.componentInstance;
    worksService = TestBed.inject(WorksService);
    router = TestBed.inject(Router);
  });

  it('should create the poems component', () => {
    expect(component).toBeTruthy();
  });

  it('should update searchTitle on search text entered', () => {
    const searchValue = 'Poem';

    component.onSearchTextEntered(searchValue);
    expect(component.searchTitle).toEqual(searchValue);
  });

  it('should open the correct PDF URL when redirectToPDF is called', () => {
    spyOn(window, 'open');
    const title = '1942, 1943, 1944';
    const formattedTitle = '1942-1944-1944';
    const expectedPdfUrl = `https://wolnelektury.pl/media/book/pdf/baczynski-${formattedTitle}.pdf`;

    spyOn(worksService, 'formatTitle').and.returnValue(formattedTitle);
    component.redirectToPDF(title);
    expect(worksService.formatTitle).toHaveBeenCalledWith(title);
    expect(window.open).toHaveBeenCalledWith(expectedPdfUrl, '_blank');
  });
});
