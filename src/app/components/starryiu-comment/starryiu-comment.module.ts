import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarryiuCommentComponent } from './starryiu-comment.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [StarryiuCommentComponent],
  imports: [CommonModule],
  exports: [StarryiuCommentComponent],
})
export class StarryiuCommentModule {}
