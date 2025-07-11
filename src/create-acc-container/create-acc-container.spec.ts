import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccContainer } from './create-acc-container';

describe('CreateAccContainer', () => {
  let component: CreateAccContainer;
  let fixture: ComponentFixture<CreateAccContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
