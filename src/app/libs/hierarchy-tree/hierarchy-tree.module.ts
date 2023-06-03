import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DndModule } from 'ngx-drag-drop';
import { HierarchyContainerComponent } from './hierarchy-container/hierarchy-container.component';
import { HierarchyNodeComponent } from './hierarchy-node/hierarchy-node.component';
import { HierarchyTreeComponent } from './hierarchy-tree.component';

@NgModule({
    imports: [
        CommonModule,
        DndModule
        // Tried out these Modules but it didn't properly work out.
        // DragDropModule,
        // DragulaModule.forRoot(),
        // NgxDnDModule
    ],
    exports: [HierarchyTreeComponent],
    declarations: [HierarchyTreeComponent, HierarchyContainerComponent, HierarchyNodeComponent],
    providers: [],
})
export class HierarchyTreeModule { }
