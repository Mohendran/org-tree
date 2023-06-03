import { Component, Input, TemplateRef } from '@angular/core';
import { DndDropEvent } from 'ngx-drag-drop';
import { NestedEmployee } from 'src/app/types/Employee';

@Component({
  selector: 'hierarchy-node',
  templateUrl: './hierarchy-node.component.html',
  styleUrls: ['./hierarchy-node.component.scss']
})
export class HierarchyNodeComponent {

  @Input()
  template!: TemplateRef<any>;

  @Input()
  node!: NestedEmployee;

  @Input()
  hasParent = false;

  constructor() { }

  ngOnInit() {
  }

  onDrop(event: DndDropEvent, list?: NestedEmployee[]) {
    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      let index = event.index;

      if (typeof index === 'undefined') {
        index = list.length;
      }

      list.splice(index, 0, event.data);
    }
  }

}
