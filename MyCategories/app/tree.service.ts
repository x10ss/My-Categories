import { Observable } from 'rxjs/Observable';
import { TreeNode } from './treeNode';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TreeService {
    private treeUrl = '/api/tree';

    constructor(private http: HttpClient) { }

    getTree(): Observable<TreeNode[]> {
        return this.http.get<TreeNode[]>(this.treeUrl);
    }
}
