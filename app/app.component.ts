import {Component, ElementRef, AfterViewInit} from "@angular/core";
import {ApiService} from "./api.service";

@Component({
    selector: 'app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent implements AfterViewInit{
    resText: string;
    resJson: string;
    author: string = 'Maik Tizziani';
    copyright: string = `&copy; 2017 by ${this.author}`;

    constructor(private el: ElementRef, private apiService: ApiService){
        apiService.getJsonFile('test').subscribe(
            data => this.resJson = JSON.stringify(data, null, 2),
            error => alert('error on loading'),
            () =>  this.requestComplete()
        );

        apiService.getTextFile('test').subscribe(
            data => this.resText = data,
            error => alert('error on loading'),
            () => this.requestComplete()
        )
    }


    requestComplete(){
        console.log('request complete');
        console.log(arguments);
    }

    ngAfterViewInit(): void {
        let node = $(this.el.nativeElement);
        console.log('view init complete');
        console.log($);
        console.log(typeof node);
        console.log(node instanceof $);
        console.log(node);
        console.log(typeof node[0]);
        console.log(node[0] instanceof $);
        console.log(node[0]);
    }

}