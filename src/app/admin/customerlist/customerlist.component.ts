import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
  result: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(environment.apiurl + 'Customer/getCustomer').subscribe((res: any) => {
      this.result = res.data;
      console.log(JSON.stringify(this.result));
    })
  }

}
