import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMvtStockComponent } from './page-mvt-stock.component';

describe('PageMvtStockComponent', () => {
  let component: PageMvtStockComponent;
  let fixture: ComponentFixture<PageMvtStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMvtStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMvtStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
