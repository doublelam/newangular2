import {Component,OnInit} from '@angular/core';
import {Routes} from '@angular/router';
import {NotebooksPageComponent} from '../pagescomponents/notebooks.component';
import {NotesPageComponent} from '../pagescomponents/notes.component';
import {NavigationComponent} from '../homecomponents/nav.component';
import {RouterTemplate} from '../pagescomponents/pages.components';
import {NotebooksService} from '../globalservice/notebookservice/notebooks.service';

@Component({
    selector: 'my-app',
    template: `
		<nav-component></nav-component>
		<pages-component></pages-component>
	`,
	directives: [NavigationComponent,RouterTemplate],
	providers: [NotebooksService]
}) 
@Routes([
	{
		path: '/notebooks/:bookname',
		component: NotebooksPageComponent
	},
	{
		path: '/notes/:notename',
		component: NotesPageComponent
	}
])
export class AppStart implements OnInit{
	constructor(public notebooksService: NotebooksService){}
	ngOnInit():void{
	}
 }