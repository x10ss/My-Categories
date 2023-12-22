import { Component, OnInit } from '@angular/core';
import { TreeNode } from './treeNode';
import { TreeService } from './tree.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    tree: TreeNode[] = [];

    constructor(private treeService: TreeService) { }

    ngOnInit() {
        this.getTree();
    }

    getTree(): void {
        this.treeService.getTree()
            .subscribe(tree => this.tree = tree);
    }
  
}
