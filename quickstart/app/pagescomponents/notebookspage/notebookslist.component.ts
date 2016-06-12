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
    ngOnInit(){
        this.ifMoreHoverd = false;
    }
    iconMouseIn(){ 
        this.ifMoreHoverd = this.onOff();
        console.log(this.ifMoreHoverd);
        this.nklinfo.items[1] = 'ss';
    }
    iconMouseOut(){
        this.ifMoreHoverd = this.onOff();
        console.log(this.ifMoreHoverd);
    }
}