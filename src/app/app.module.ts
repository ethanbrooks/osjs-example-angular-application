import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {ExplorerComponent} from './explorer.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { DxFileManagerModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    ExplorerComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: ExplorerComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    DxFileManagerModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [ExplorerComponent]
})
export class AppModule { }
