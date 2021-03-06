import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../core/auth-service/auth.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
	constructor(public auth: AuthService) { }
	ngOnInit(){}
}