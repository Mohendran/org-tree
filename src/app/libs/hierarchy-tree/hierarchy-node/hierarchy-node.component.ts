import { Component, Input, TemplateRef } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { TreeNode } from 'src/app/types';
import { TreeUpdateService } from './../tree-update.service';

@Component({
  selector: 'hierarchy-node',
  templateUrl: './hierarchy-node.component.html',
  styleUrls: ['./hierarchy-node.component.scss']
})
export class HierarchyNodeComponent {

  @Input()
  template!: TemplateRef<any>;

  @Input()
  node!: TreeNode;

  @Input()
  hasParent = false;

  constructor(private treeUpdateService: TreeUpdateService) { }

  ngOnInit() {
  }

  onDrop(event: DndDropEvent, list?: TreeNode[]) {
    if (list && (event.dropEffect === 'move')) {
      let index = event.index;
      if (typeof index === 'undefined') {
        index = list.length;
      }
      // Inserts the dropped element into the list
      list.splice(index, 0, event.data);

      this.treeUpdateService.treeUpdated({
        newManager: this.node.ID,
        oldManager: event.data.Manager,
        nodeId: event.data.ID
      });
    }
  }

}
