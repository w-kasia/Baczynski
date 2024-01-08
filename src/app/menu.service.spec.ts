import { TestBed } from '@angular/core/testing';
import { MenuService } from './menu.service';

describe('MenuService', () => {
  let menuService: MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenuService]
    });
    menuService = TestBed.inject(MenuService);
  });

  it('should be created the menu service', () => {
    expect(menuService).toBeTruthy();
  });

  it('should toggle the menu state', () => {
    expect(menuService.isMenuOpen).toBeFalse();
    menuService.toggleMenu();
    expect(menuService.isMenuOpen).toBeTrue();
    menuService.toggleMenu();
    expect(menuService.isMenuOpen).toBeFalse();
  })
});
