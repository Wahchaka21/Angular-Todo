import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorButton } from './validator-button';

describe('ValidatorButton', () => {
  let component: ValidatorButton;
  let fixture: ComponentFixture<ValidatorButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatorButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatorButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
