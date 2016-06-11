import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
@Component({
	selector: 'pages-component',
	template: `
		<section class="main-body">
			<article class="content-main">
				<router-outlet></router-outlet>
			</article>
			<aside class="content-aside">
				some aside content
			</aside>
		</section>
		
	`,
	directives: [ROUTER_DIRECTIVES]
})

export class RouterTemplate{
	
}