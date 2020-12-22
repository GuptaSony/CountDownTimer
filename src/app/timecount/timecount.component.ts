import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timecount',
  templateUrl: './timecount.component.html',
  styleUrls: ['./timecount.component.css']
})
export class TimecountComponent implements OnInit {

  private subscription: Subscription;
  datetime: string;
  public dateNow = new Date();
  public dDay = new Date('Dec 22 2021 16:25:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;

  public timeDifference;
  public secondsToDday="00";
  public minutesToDday="00";
  public hoursToDday="00";
  public daysToDday="00";


  private getTimeDifference(newdatetime) {
    this.timeDifference = newdatetime.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits(timeDifference) {
    var time = new Date();
    time.setSeconds(Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute));
    time.setMinutes(Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute));
    time.setHours(Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay));
    // this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
    time.toTimeString()
    this.secondsToDday = time.toTimeString().slice(6,8);
    this.minutesToDday = time.toTimeString().slice(3,5);
    this.hoursToDday = time.toTimeString().slice(0,2);
  }

  ngOnInit() {

  }
  startCountDown() {
    let newdatetime = new Date(this.datetime);
    if (isNaN(newdatetime.getTime())) {
      alert("please select date and time");
    }
    else {
      this.subscription = interval(1000)
        .subscribe(x => { this.getTimeDifference(newdatetime); });
    }

  }
  stopCountDown() {
    var r = confirm("Are you sure to stop Count Down!");
    if (r == true) {
      this.subscription.unsubscribe();
    }
  }
  resetCountDown() {
    this.subscription.unsubscribe();
    this.datetime = null;
    this.secondsToDday = "00";
    this.minutesToDday = "00";
    this.hoursToDday = "00";
    this.daysToDday = "00";
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
