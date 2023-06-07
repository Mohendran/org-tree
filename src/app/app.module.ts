import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NestedTreePipe } from './common/nestedTree.pipe';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';
import { EmployeeFilterComponent } from './components/employee-filter/employee-filter.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { OrgNodeComponent } from './components/org-node/org-node.component';
import { OrgTreeComponent } from './components/org-tree/org-tree.component';
import { HierarchyTreeModule } from './libs/hierarchy-tree/hierarchy-tree.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    OrgTreeComponent,
    OrgNodeComponent,
    EmployeeInfoComponent,
    EmployeeFilterComponent,
    EmployeeCardComponent,
    NestedTreePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    HierarchyTreeModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
