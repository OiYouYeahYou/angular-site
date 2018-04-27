import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { FeedComponent } from './feed/feed.component'
import { StatusComponent } from './status/status.component'
import { ContactComponent } from './contact/contact.component'
import { HomeComponent } from './home/home.component'
import { NavigationComponent } from './navigation/navigation.component'

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'feed', component: FeedComponent },
	{ path: 'status', component: StatusComponent },
	{ path: 'contact', component: ContactComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		AboutComponent,
		PortfolioComponent,
		FeedComponent,
		StatusComponent,
		ContactComponent,
		HomeComponent,
		NavigationComponent
	],
	imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
