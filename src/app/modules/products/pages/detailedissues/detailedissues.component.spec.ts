import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedissuesComponent } from './detailedissues.component';

describe('DetailedissuesComponent', () => {
  let component: DetailedissuesComponent;
  let fixture: ComponentFixture<DetailedissuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedissuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
