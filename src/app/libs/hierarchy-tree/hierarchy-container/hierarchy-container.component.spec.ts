import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyContainerComponent } from './hierarchy-container.component';

describe('HierarchyContainerComponent', () => {
  let component: HierarchyContainerComponent;
  let fixture: ComponentFixture<HierarchyContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HierarchyContainerComponent]
    });
    fixture = TestBed.createComponent(HierarchyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
