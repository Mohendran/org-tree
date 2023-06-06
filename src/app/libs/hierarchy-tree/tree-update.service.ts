import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NodeUpdatedEvent } from 'src/app/types/Employee';


@Injectable({
  providedIn: 'root'
})
export class TreeUpdateService {
  private updatedTreeSource: Subject<NodeUpdatedEvent> = new Subject();

  public updatedTree$ = this.updatedTreeSource.asObservable();

  treeUpdated(nodeUpdatedEvent: NodeUpdatedEvent) {
    this.updatedTreeSource.next(nodeUpdatedEvent);
  }

}
