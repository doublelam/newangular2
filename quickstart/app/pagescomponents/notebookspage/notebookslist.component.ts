import {Component,OnInit,Input} from '@angular/core';
import {SwitchService} from '../../globalservice/switch.service';
@Component({
    selector: 'notebooks-list',
    templateUrl: '../../../templates/pagestemplate/notebookslist.tpl.html',
    providers: [SwitchService],
    inputs: ['nklinfo']
})
export class notebooksListComponent implements OnInit{
    onOff: any;
    nklinfo: {items:Array<string>,index: number};
    ifMoreHoverd:boolean
    constructor(private swichService: SwitchService){
        this.onOff = this.swichService.switchOnOff();
    }
    ngOnInit():void{
        this.ifMoreHoverd = false;
    }
    iconMouseIn():void{ 
        this.ifMoreHoverd = this.onOff();
        console.log(this.ifMoreHoverd);
    }
    iconMouseOut():void{
        this.ifMoreHoverd = this.onOff();
        console.log(this.ifMoreHoverd);
    }
    deleteNotebook():void{
       if(confirm('Are you sure to delete it?')){
           this.nklinfo.items.splice(this.nklinfo.index,1);
       }else{
           console.log('do not delete it');
       }
    }
}