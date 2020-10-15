import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IntentCommand} from '../models/intent-command.model';
import {HttpClient} from '@angular/common/http';
import {IntentList} from '../models/intent-list.model';

@Injectable({
  providedIn: 'root'
})
export class IntentService {
  private serverUrl: string;

  constructor(private http: HttpClient) {
    this.serverUrl = 'http://localhost:8080/';
  }

  newBook(intentName: string, inSent: string, successResponse: string, errorResponse: string): any{
    const newURL = this.serverUrl + 'intent/new';
    const command = new IntentCommand();
    command.intentName = intentName;
    command.inSent = inSent;
    command.successResponse = successResponse;
    command.errorResponse = errorResponse;
    return this.http.post<any>(newURL, command);

  }

  getIntent(intentName: string): Observable<IntentCommand>{
    const newURL = this.serverUrl + 'intent/get-intent';
    return this.http.post<IntentCommand>(newURL, intentName);
  }

  getlistIntent(intent: IntentCommand): Observable<IntentList>{
    const newURL = this.serverUrl + 'intent/list-intent';
    return this.http.post<IntentList>(newURL, intent);
  }

  deleteIntent(intentName: string): any{
    const newURL = this.serverUrl + 'intent/delete/' + intentName;
    return this.http.post<any>(newURL, intentName);
  }

  modifyBook(intent: IntentCommand): any{
    const newUrl = this.serverUrl + 'intent/modify';
    return this.http.post<any>(newUrl, intent);
  }
}
