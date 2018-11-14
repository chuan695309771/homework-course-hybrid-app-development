import { NgModule } from '@angular/core';
import { AComponent } from './a/a';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
@NgModule({
	declarations: [AComponent],
	imports: [
		
	],
	exports: [AComponent]
})
export class ComponentsModule {}
