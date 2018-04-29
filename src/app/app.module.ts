import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { NavigationComponent, pages } from './navigation/navigation.component'

@NgModule({
	declarations: [
		AppComponent,
		NavigationComponent,
		...pages.map(page => page.component)
	],
	imports: [BrowserModule, RouterModule.forRoot(pages)],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
