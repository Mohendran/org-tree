import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgNodeComponent } from './org-node.component';

describe('OrgNodeComponent', () => {
  let component: OrgNodeComponent;
  let fixture: ComponentFixture<OrgNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgNodeComponent]
    });
    fixture = TestBed.createComponent(OrgNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
