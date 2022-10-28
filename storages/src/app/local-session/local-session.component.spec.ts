import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSessionComponent } from './local-session.component';

describe('LocalSessionComponent', () => {
  let component: LocalSessionComponent;
  let fixture: ComponentFixture<LocalSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalSessionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocalSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
