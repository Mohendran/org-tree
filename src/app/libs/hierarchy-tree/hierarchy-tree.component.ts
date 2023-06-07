import { Component, Input, TemplateRef } from '@angular/core';
import { TreeNode } from 'src/app/types';

@Component({
  selector: 'hierarchy-tree',
  templateUrl: './hierarchy-tree.component.html',
  styleUrls: ['./hierarchy-tree.component.scss']
})
export class HierarchyTreeComponent {

  @Input()
  template!: TemplateRef<any>;

  @Input()
  nodes!: TreeNode[];

  @Input()
  hasParent = false;

}
