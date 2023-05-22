import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class DateInformationService {
    constructor(public http: HttpClient) {}

    public getRandomDateInfo(date: Date): Promise<string> {
        const url = `http://numbersapi.com/${
            date.getMonth() + 1
        }/${date.getDate()}/date`;

        return firstValueFrom(this.http.get(url, { responseType: 'text' }));
    }
}
