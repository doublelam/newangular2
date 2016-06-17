import {Component,OnInit} from '@angular/core';
import {notebooksListComponent} from './notebookspage/notebookslist.component';
import {SwitchService} from '../globalservice/switch.service';
import {NotebooksService} from '../globalservice/notebookservice/notebooks.service';

@Component({
	template: `
		<div class="create-notebook">
			<div class="add-icon-container" *ngIf="!ifClicked"><i class="fa fa-plus" (click)="addClick()"></i></div>
			<div class="add-content-area" *ngIf="ifClicked">
				<input type="text" placeholder="Typing Notebook's Name..." #notebookNameInput (keyup)="0">
				<button class="main" [disabled]="notebookNameInput.value===''" (click)="addNotebook(notebookNameInput.value)">Confirm</button><button (click)="addClick()">Cancel</button>
			</div>
		</div>
		<ul class="notebooks-container">
			<notebooks-list *ngFor="let item of noteboosService.notebooksData.notebooks;let index=index" [nklinfo]="{index:index}"></notebooks-list>
		</ul>
	`,
	directives: [notebooksListComponent],
	providers: [SwitchService]
})
export class NotebooksPageComponent implements OnInit{
	onOff: any;
	ifClicked: boolean;
	constructor(private switchOnOff: SwitchService,public noteboosService: NotebooksService){}
	ngOnInit(){
		this.ifClicked = false;
		this.onOff = this.switchOnOff.switchOnOff();
		this.testGet();
	}
	testGet():void{
		console.log(this.noteboosService.notebooksData);
		let thisIndex = this;
		setTimeout(function() {
			console.log(thisIndex.noteboosService.notebooksData);
		}, 2000);
	}
	addNotebook(bookName:string):string{
		
		this.noteboosService.notebooksData.notebooks.unshift({name:bookName,notes:[{title:'for typing',content:'for typing content'}]});
		this.addClick();
		console.log(this.noteboosService.notebooksData);
		return bookName;
			
	}
	addClick():void{
		this.ifClicked = this.onOff();
	}
}