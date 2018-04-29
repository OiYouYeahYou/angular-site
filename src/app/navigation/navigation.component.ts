import { Component, OnInit } from '@angular/core'
import { Routes } from '@angular/router'
import { HomeComponent } from '../home/home.component'
import { AboutComponent } from '../about/about.component'
import { PortfolioComponent } from '../portfolio/portfolio.component'
import { FeedComponent } from '../feed/feed.component'
import { StatusComponent } from '../status/status.component'
import { ContactComponent } from '../contact/contact.component'

interface Route {
	path: string
	component: any
}

export const corePages: Route[] = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'feed', component: FeedComponent },
	{ path: 'status', component: StatusComponent },
	{ path: 'contact', component: ContactComponent }
]

export const pages: Route[] = [
	{ path: '', component: HomeComponent },
	...corePages
]

const links = corePages.map(
	({ path }: Route) =>
		`<a routerLink="/${path}" routerLinkActive="active">${path}</a>`
)

const template = `<nav>${links.join('\n')}</nav>`

@Component({
	selector: 'app-navigation',
	template
})
export class NavigationComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
