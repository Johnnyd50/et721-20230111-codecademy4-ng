import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QccComponent } from './qcc.component';

describe('QccComponent', () => {
  let component: QccComponent;
  let fixture: ComponentFixture<QccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QccComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
