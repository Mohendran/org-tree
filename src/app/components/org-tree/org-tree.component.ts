import { Component, Input } from '@angular/core';
import { TreeNode } from 'src/app/types';

@Component({
    selector: 'org-tree',
    templateUrl: 'org-tree.component.html',
    styleUrls: ['org-tree.component.scss']
})

export class OrgTreeComponent {

    @Input() hierarchy!: TreeNode[];
}