import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise"

@Injectable()
export class ApiService {

    data: any;
    constructor(private http: Http){
        this.data = null;
    }

    getFile(file: string, path: string, extension: string, type: string){
        let url: string = `${path}/${file}.${extension}`;
        let response = this.http.get(url);
        switch(type){
            case 'json':
                return response.map(res => res.json());
            case 'text':
                return response.map(res => res.text());
            default:
                return undefined;
        }
    }

    getTextFile(file: string, path: string = 'files', extension: string = 'txt'){
        return this.getFile(file, path, extension, 'text');
    }

    getJsonFile(file: string, path: string = 'files', extension: string = 'json'){
        return this.getFile(file, path, extension, 'json');
    };
}