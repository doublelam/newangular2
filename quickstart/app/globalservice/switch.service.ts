import {Injectable} from '@angular/core';
@Injectable()
export class SwitchService{
	switchOnOff(){
		let switchState:boolean = false;
		return function():boolean{
			switchState = !switchState;
			return switchState;
		}
	}
}