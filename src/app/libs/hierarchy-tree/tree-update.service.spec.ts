import { TestBed } from '@angular/core/testing';

import { TreeUpdateService } from './tree-update.service';

describe('TreeUpdateService', () => {
  let service: TreeUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
