
import {Injectable,OnInit,Component} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class NotebooksService{
	public notebooksData: {notebooks:Array<{name:string,notes:Array<{title:string,content:string}>}>};
	public notesJsonError: Object;
	constructor(private http: Http){
		let thisIndex = this;
		this.http.get('/app/notes.json').map((res: Response) => res.json())
		.subscribe(function(res){
				thisIndex.notebooksData = res;
			},function(error){
				thisIndex.notesJsonError = error;
			})
		// .subscribe(res => this.notebooksData = res, error => this.notesJsonError = error);
	}
}