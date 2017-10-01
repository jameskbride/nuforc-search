import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeAggregatorComponent } from './shape-aggregator.component';

describe('ShapeAggregatorComponent', () => {
  let component: ShapeAggregatorComponent;
  let fixture: ComponentFixture<ShapeAggregatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShapeAggregatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeAggregatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
