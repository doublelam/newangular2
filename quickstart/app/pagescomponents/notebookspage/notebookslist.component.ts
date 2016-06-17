import {Component, OnInit, Input} from '@angular/core';
import {SwitchService} from '../../globalservice/switch.service';
import {NotebooksService} from '../../globalservice/notebookservice/notebooks.service';

@Component({
    selector: 'notebooks-list',
    templateUrl: '../../../templates/pagestemplate/notebookslist.tpl.html',
    providers: [SwitchService],
    inputs: ['nklinfo']
})
export class notebooksListComponent implements OnInit {
    onOff: any;
    newOnOff: any;
    ifMoreHoverd: boolean;
    ifEditClick: boolean;
    nklinfo:{index:number};
    renameInput: string;
    constructor(private swichService: SwitchService,public notebooksService: NotebooksService) {

    }
    ngOnInit(): void {
        this.onOff = this.swichService.switchOnOff();
        this.newOnOff = this.swichService.switchOnOff();
        this.ifMoreHoverd = false;
        this.ifEditClick = false;
        this.renameInput = this.notebooksService.notebooksData.notebooks[this.nklinfo.index].name;
    }
    iconMouseIn(): void {
        this.ifMoreHoverd = this.onOff();
    }
    iconMouseOut(): void {
        this.ifMoreHoverd = this.onOff();
    }
    deleteNotebook(): void {
        if (confirm('Are you sure to delete it?')) {
            this.notebooksService.notebooksData.notebooks.splice(this.nklinfo.index, 1);
        } else {
            console.log('do not delete it');
        }
    }
    renameConfirm(): void {
        this.notebooksService.notebooksData.notebooks[this.nklinfo.index].name = this.renameInput;
        this.ifEditClick = this.newOnOff();
    }
    renameCancle(): void {
        this.renameInput = this.notebooksService.notebooksData.notebooks[this.nklinfo.index].name;
        this.ifEditClick = this.newOnOff();
    }
    editOnOff():void{
        this.ifEditClick = this.newOnOff();
    }
}