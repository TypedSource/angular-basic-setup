import {Component} from "@angular/core";

@Component({
    selector: 'app',
    templateUrl: './app/app.template.html',
    styleUrls: ['./app/app.style.css']
})
export class AppComponent {
    constructor(){
        console.log('AppComponent created');
    }
}