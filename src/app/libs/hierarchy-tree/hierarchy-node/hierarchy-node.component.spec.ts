import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyNodeComponent } from './hierarchy-node.component';

describe('HierarchyNodeComponent', () => {
  let component: HierarchyNodeComponent;
  let fixture: ComponentFixture<HierarchyNodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HierarchyNodeComponent]
    });
    fixture = TestBed.createComponent(HierarchyNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
