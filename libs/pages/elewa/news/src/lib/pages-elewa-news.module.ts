import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiListsModule } from '@elewa-group/features/components/ui-lists'
import { NewsPageComponent } from './pages/news-page/news-page.component';

import { NewsRoutingModule } from './news.routing';

@NgModule({
  imports: [CommonModule, NewsRoutingModule, UiListsModule],
  declarations: [NewsPageComponent],
})
export class NewsPageModule {}
