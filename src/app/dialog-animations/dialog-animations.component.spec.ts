import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogAnimationsComponent } from './dialog-animations.component';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../material/material.module';

describe('DialogAnimationsComponent', () => {
  let component: DialogAnimationsComponent;
  let fixture: ComponentFixture<DialogAnimationsComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<DialogAnimationsComponent>>;

beforeEach(() => {
  mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
  TestBed.configureTestingModule({
    imports: [MaterialModule],
    providers: [{ provide: MatDialogRef, useValue: mockDialogRef}],
    declarations: [DialogAnimationsComponent]
    });
});

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnimationsComponent);
    component = fixture.componentInstance;
  });

  it('should create the dialog-animations component', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dialog when "Ok" button is clicked', () => {
    const confirmButton = fixture.nativeElement.querySelector('.confirmBtn');

    confirmButton.click();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
