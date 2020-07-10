import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Students} from '../../json/students'



@Injectable()

export class StudentService {
   
    constructor(private _http: HttpClient ){}

    getStudentDetails(){
        // return this._http.get('http://www.json-generator.com/api/json/get/cpreaUpEFu?indent=3')
        return Students
    }
}