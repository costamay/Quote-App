import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); 
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) 
    const secondsInDay = 86400; 
    const minutesInDay = 1440;
    const hoursInDay = 24;
    var dateDifferenceSeconds = dateDifference*0.001; 
    var minCounter = (dateDifferenceSeconds/60)/ minutesInDay;
    var hourCounter = (dateDifferenceSeconds/3600)/hoursInDay;
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter=>1){
      return dateCounter;
    }else{
      return 0
    }
  }
  }


