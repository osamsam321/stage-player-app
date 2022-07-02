import {Observable} from 'rxjs'
import { User } from './user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable ({
    providedIn: 'root'
})
export class UserService{
    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient){}

    public getUser(): Observable<User[]> {
        return this.http.get<User[]>(`${this.apiServerUrl}/users `);
    }
    public addUser(user: User): Observable<User> {
        return this.http.post<User>((`${this.apiServerUrl}/new `), user);
    }
    public updateUser(user: User): Observable<User> {
        return this.http.put<User>((`${this.apiServerUrl}/update `), user);
    }
    public deleteUser(id: number): Observable<User> {
        return this.http.delete<User>((`${this.apiServerUrl}/remove${id}`));
    }
    
}