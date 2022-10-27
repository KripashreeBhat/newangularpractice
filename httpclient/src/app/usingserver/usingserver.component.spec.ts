import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingserverComponent } from './usingserver.component';

describe('UsingserverComponent', () => {
  let component: UsingserverComponent;
  let fixture: ComponentFixture<UsingserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingserverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
