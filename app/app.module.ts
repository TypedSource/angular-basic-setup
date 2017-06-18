import {NgModule} from "@angular/core";
import {AppComponent} from './app.component';
import {BrowserModule} from "@angular/platform-browser";
import {ApiService} from "./api.service";
import {HttpModule} from "@angular/http";


@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations:[AppComponent],
    bootstrap: [AppComponent],
    providers: [ApiService]
})
export class AppModule {}