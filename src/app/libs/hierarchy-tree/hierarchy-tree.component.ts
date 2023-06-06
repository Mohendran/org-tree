import { Component, Input, TemplateRef } from '@angular/core';
import { TreeNode } from '../../types/Employee';

@Component({
  selector: 'hierarchy-tree',
  templateUrl: './hierarchy-tree.component.html',
  styleUrls: ['./hierarchy-tree.component.scss']
})
export class HierarchyTreeComponent {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  template!: TemplateRef<any>;

  @Input()
  nodes!: TreeNode[];

  @Input()
  hasParent = false;

}
