import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoaoComponent } from './joao.component';

describe('JoaoComponent', () => {
  let component: JoaoComponent;
  let fixture: ComponentFixture<JoaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
