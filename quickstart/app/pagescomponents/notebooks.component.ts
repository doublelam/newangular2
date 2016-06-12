import {Component,OnInit} from '@angular/core';
import {notebooksListComponent} from './notebookspage/notebookslist.component';
import {SwitchService} from '../globalservice/switch.service';
@Component({
	template: `
		<div class="creat-notebook">
			<div *ngIf="!ifClicked"><i class="fa fa-plus" (click)="addClick()"></i></div>
			<div *ngIf="ifClicked">
				<input type="text" placeholder="Typing Notebook's Name..." #notebookNameInput (keyup)="0">
				<button [disabled]="notebookNameInput.value===''" (click)="addNotebook(notebookNameInput.value)">Confirm</button><button (click)="addClick()">Cancel</button>
			</div>
		</div>
		<ul class="notebooks-container">
			<notebooks-list *ngFor="let item of items;let index=index" [nklinfo]="{items:items,index:index}"></notebooks-list>
		</ul>
	`,
	directives: [notebooksListComponent],
	providers: [SwitchService]
})
export class NotebooksPageComponent implements OnInit{
	items = ['the first name','the second name','the third name'];
	onOff: any;
	ifClicked: boolean;
	constructor(private switchOnOff: SwitchService){
		this.onOff = this.switchOnOff.switchOnOff();
	}
	ngOnInit(){
		this.ifClicked = false;
	}
	addNotebook(bookName:string):string{
		if(bookName !==''){
			this.items.unshift(bookName);
			this.addClick();
			return bookName;
		}else{
			return 'no books added';
		}	
	}
	addClick():void{
		this.ifClicked = this.onOff();
		console.log(this.ifClicked);
	}
}