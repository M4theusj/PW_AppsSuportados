import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuportadosComponent } from './suportados.component';

describe('SuportadosComponent', () => {
  let component: SuportadosComponent;
  let fixture: ComponentFixture<SuportadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuportadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuportadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
