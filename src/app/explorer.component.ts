import { Component, enableProdMode } from '@angular/core';

import { DxFileManagerModule } from 'devextreme-angular';
import RemoteFileProvider from 'devextreme/ui/file_manager/file_provider/remote';


@Component({
    styleUrls: ['./explorer.component.css'],
    selector: 'app-explorer',
    templateUrl: './explorer.component.html',
    preserveWhitespaces: true
})
export class ExplorerComponent {
    allowedFileExtensions: string[];
    remoteProvider: RemoteFileProvider;

    constructor() {
        this.allowedFileExtensions = ['.js', '.json', '.css'];
        this.remoteProvider = new RemoteFileProvider({
            endpointUrl: 'https://js.devexpress.com/Demos/Mvc/api/file-manager-file-system-scripts'
            //           endpointUrl: 'https://node-git.localhost.neonzoom.com/list-tree'
        });
    }
}
