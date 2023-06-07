import { Component, Input, TemplateRef } from '@angular/core';
import { DropEffect } from 'ngx-drag-drop';
import { TreeNode } from 'src/app/types';

@Component({
  selector: 'hierarchy-container',
  templateUrl: './hierarchy-container.component.html',
  styleUrls: ['./hierarchy-container.component.scss']
})
export class HierarchyContainerComponent {

  @Input()
  template!: TemplateRef<any>;

  @Input()
  node!: TreeNode;

  @Input()
  hasParent = false;

  onDragged(item: TreeNode, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      // Remove the dragged Element from the list
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }
}
