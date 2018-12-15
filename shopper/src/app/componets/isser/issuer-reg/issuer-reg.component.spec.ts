import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerRegComponent } from './issuer-reg.component';

describe('IssuerRegComponent', () => {
  let component: IssuerRegComponent;
  let fixture: ComponentFixture<IssuerRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuerRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuerRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
