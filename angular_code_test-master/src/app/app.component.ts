import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  data: any;
  zcode: any;
  url =
    'https://api.openweathermap.org/data/2.5/forecast?q=tanuku&appid=32ba0bfed592484379e51106cef3f204';
  url1: any;
  ccond: any;
  temp: any;
  temp_max: any;
  temp_min: any;
  ccond2: any;
  temp2: any;
  temp_max2: any;
  temp_min2: any;
  ccond3: any;
  temp3: any;
  temp_max3: any;
  temp_min3: any;
  ccond4: any;
  temp4: any;
  temp_max4: any;
  temp_min4: any;
  ccond5: any;
  temp5: any;
  temp_max5: any;
  temp_min5: any;
  d = new Date();
  day1: any;
  mon1: any;
  date1: any;
  day2: any;
  mon2: any;
  date2: any;
  day3: any;
  mon3: any;
  date3: any;
  day4: any;
  mon4: any;
  date4: any;
  day5: any;
  mon5: any;
  date5: any;
  weekday = [
    ' ',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  month = [
    '',
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  constructor(private http: HttpClient) {}
  setZip(zipcode) {
    this.zcode = zipcode;
    localStorage.setItem('ZipCode : ', zipcode);
    this.getData();
  }
  getData() {
    this.http.get(this.url).subscribe((res) => {
      this.data = res;
      this.ccond = this.data.list[0].weather[0].main;
      this.temp = this.data.list[0].main.temp;
      this.temp_max = this.data.list[0].main.temp_max;
      this.temp_min = this.data.list[0].main.temp_min;
      console.log(
        this.ccond +
          '   ' +
          this.temp +
          '   ' +
          this.temp_min +
          '   ' +
          this.temp_max
      );
      this.ccond2 = this.data.list[1].weather[0].main;
      this.temp2 = this.data.list[1].main.temp;
      this.temp_max2 = this.data.list[1].main.temp_max;
      this.temp_min2 = this.data.list[1].main.temp_min;
      console.log(
        this.ccond2 +
          '   ' +
          this.temp2 +
          '   ' +
          this.temp_min2 +
          '   ' +
          this.temp_max2
      );
      this.ccond3 = this.data.list[2].weather[0].main;
      this.temp3 = this.data.list[2].main.temp;
      this.temp_max3 = this.data.list[2].main.temp_max;
      this.temp_min3 = this.data.list[2].main.temp_min;
      console.log(
        this.ccond3 +
          '   ' +
          this.temp3 +
          '   ' +
          this.temp_min3 +
          '   ' +
          this.temp_max3
      );
      this.ccond4 = this.data.list[3].weather[0].main;
      this.temp4 = this.data.list[3].main.temp;
      this.temp_max4 = this.data.list[3].main.temp_max;
      this.temp_min4 = this.data.list[3].main.temp_min;
      console.log(
        this.ccond4 +
          '   ' +
          this.temp4 +
          '   ' +
          this.temp_min4 +
          '   ' +
          this.temp_max4
      );
      this.ccond5 = this.data.list[4].weather[0].main;
      this.temp5 = this.data.list[4].main.temp;
      this.temp_max5 = this.data.list[4].main.temp_max;
      this.temp_min5 = this.data.list[4].main.temp_min;
      console.log(
        this.ccond5 +
          '   ' +
          this.temp5 +
          '   ' +
          this.temp_min5 +
          '   ' +
          this.temp_max5
      );

      this.date1 = this.d.getDate();
      this.day1 = this.weekday[this.CheckDay(1)];
      this.mon1 = this.month[this.CheckMonth(this.d.getMonth())];

      this.date2 = this.d.getDate() + 1;
      this.day2 = this.weekday[this.CheckDay(2)];
      this.mon2 = this.month[this.CheckMonth(this.d.getMonth())];

      this.date3 = this.d.getDate() + 2;
      this.day3 = this.weekday[this.CheckDay(3)];
      this.mon3 = this.month[this.CheckMonth(this.d.getMonth())];

      this.date4 = this.d.getDate() + 3;
      this.day4 = this.weekday[this.CheckDay(4)];
      this.mon4 = this.month[this.CheckMonth(this.d.getMonth())];

      this.date5 = this.d.getDate() + 4;
      this.day5 = this.weekday[this.CheckDay(5)];
      this.mon5 = this.month[this.CheckMonth(this.d.getMonth())];
    });
  }
  CheckDay(day) {
    if (day + this.d.getDay() > 7) {
      return day + this.d.getDay() - 7;
    } else {
      return day + this.d.getDay();
    }
  }
  CheckMonth(month) {
    if (month + this.d.getMonth() > 11) {
      return month + this.d.getMonth() - 12;
    } else {
      return month + this.d.getMonth();
    }
  }
}
