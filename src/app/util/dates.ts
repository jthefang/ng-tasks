import * as firebase from 'firebase';

export const DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function formatDate(date, includeDayOfWeek=true) {
  var dateString = `${date.getMonth() + 1}/${date.getDate()}`;
  if (includeDayOfWeek) {
    dateString = `${DaysOfWeek[date.getDay()]}, ${dateString}`;
  }
  return dateString;
}

function getMondayOfThisWeek() {
  const currDate = new Date(); // get current date
  const mondayOfThisWeek = currDate.getDate() - currDate.getDay() + 1;
  return mondayOfThisWeek;
}

export function getThisWeeksDates(): Date[] {
  const mondayOfThisWeek = getMondayOfThisWeek();
  const saturdayOfThisWeek = mondayOfThisWeek + 5;

  let weekDates: Date[] = [];
  for (var d = mondayOfThisWeek; d < saturdayOfThisWeek; d++) {
    const date = new Date(new Date().setDate(d));
    weekDates.push(date);
  }
  return weekDates;
}

export function getWeekendDates(): Date[] {
  const mondayOfThisWeek = getMondayOfThisWeek();
  const saturdayOfThisWeek = new Date(new Date().setDate(mondayOfThisWeek + 5));
  const sundayOfThisWeek = new Date(new Date().setDate(mondayOfThisWeek + 6));
  return [saturdayOfThisWeek, sundayOfThisWeek];
}

/* 
  Must first cast the date to unknown => firestore.Timestamp => JS Date
*/
export function convertFirestoreTimestampToDate(timestamp: unknown) {
  let fireTimestamp = timestamp as firebase.firestore.Timestamp;
  return new Date(fireTimestamp.seconds * 1000);
}

export function timestampFromDate(date: Date) {
  return firebase.firestore.Timestamp.fromDate(date);
}

export function addDaysToDate(nDays: number, date: Date) {
  var date = new Date(date);
  date.setDate(date.getDate() + nDays);
  return date;
}

export function datesAreOnSameDay(first, second) {
  return first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();
}