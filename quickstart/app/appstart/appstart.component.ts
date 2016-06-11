import {Component} from '@angular/core';
import {Routes} from '@angular/router';
import {NotebooksPageComponent} from '../pagescomponents/notebooks.component';
import {NotesPageComponent} from '../pagescomponents/notes.component';
import {NavigationComponent} from '../homecomponents/nav.component';
import {RouterTemplate} from '../pagescomponents/pages.components'

@Component({
    selector: 'my-app',
    template: `
		<nav-component></nav-component>
		<pages-component></pages-component>
	`,
	directives: [NavigationComponent,RouterTemplate]
}) 
@Routes([
	{
		path: '/notebooks',
		component: NotebooksPageComponent
	},
	{
		path: '/notes',
		component: NotesPageComponent
	}
])
export class AppStart {
	
 }