import {Component} from '@angular/core';
import {notebooksListComponent} from './notebookspage/notebookslist.component';
@Component({
	template: `
		<ul class="notebooks-container">
			<notebooks-list *ngFor="let item of items;let index=index" [nklinfo]="{items:items,index:index}"></notebooks-list>
		</ul>
	`,
	directives: [notebooksListComponent]
})
export class NotebooksPageComponent{
	items = ['the first name','the second name','the third name'];
}