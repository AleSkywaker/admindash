import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoDonutsComponent } from './grafico-donuts.component';

describe('GraficoDonutsComponent', () => {
  let component: GraficoDonutsComponent;
  let fixture: ComponentFixture<GraficoDonutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoDonutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoDonutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
