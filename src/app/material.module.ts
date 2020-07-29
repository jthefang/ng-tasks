import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    DragDropModule,
    MatCardModule
  ],
  exports: [
    DragDropModule,
    MatCardModule
  ]
})
export class MaterialModule {}