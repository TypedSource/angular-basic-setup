import {Component} from "@angular/core";

@Component({
    selector: 'app',
    template: '<h1>Angular 2 World</h1>'
})
export class AppComponent {
    constructor(){
        console.log('AppComponent created');
    }
}