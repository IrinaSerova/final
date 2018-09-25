import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stockDataSearch';
  dates = [];
  targetSymbol: string;
  timeSeries: any;
  // this.stock.getData(this.equity)
  constructor(private api: ApiService){
    api.getData().subscribe((data) =>{
      console.log(data);
      console.log(data['Time Series (Daily)']);
      this.targetSymbol = data['Meta Data']['2. Symbol'];
      
      
      // let data_open = data['list'].map(res => res.main.temp_max);



      
     
      console.log('results', this.targetSymbol);
      // return (data: any) => data
      // .map((data: any) => get(data['Time Series (Daily)']))
      // console.log(data)
      this.timeSeries = data['Time Series (Daily)'];
      // for (let result in timeSeries){
      // console.log(`Returns ${this.result}`);
        
        // this.res = data['Meta Data']['2.Symbol'];
        // console.log(`Returns ${this.res}`);
        // console.log(`Returns ${res}`);
      // }
     // Create labels array
     
      
    }, err => {
        console.log(err)
      })
  }
  
}
// ["Time Series (Daily)"]

// return (data: any) => data
//       .map((data: any) => get(data, this.title + '.' + key))
//       console.log(`${data}${this.title} ${key}`);