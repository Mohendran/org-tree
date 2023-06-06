import { Component, Input, TemplateRef } from '@angular/core';
import { DropEffect } from 'ngx-drag-drop';
import { NestedEmployee } from 'src/app/types/Employee';

@Component({
  selector: 'hierarchy-container',
  templateUrl: './hierarchy-container.component.html',
  styleUrls: ['./hierarchy-container.component.scss']
})
export class HierarchyContainerComponent {

  @Input()
  template!: TemplateRef<any>;

  @Input()
  node!: NestedEmployee;

  @Input()
  hasParent = false;

  onDragged(item: NestedEmployee, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }
}
