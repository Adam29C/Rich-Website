import { format, formatDistanceToNow } from "date-fns";
const dateTime = require("node-datetime");

export function getWeekStartAndEndDates() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const diff = today.getDate() - dayOfWeek + (dayOfWeek == 0 ? -6 : 1);
  const startOfWeek = new Date(today.setDate(diff));
  const endOfWeek = new Date(today.setDate(today.getDate() + 6));

  const startFormatted = [
    ("0" + (startOfWeek.getMonth() + 1)).slice(-2),
    ("0" + startOfWeek.getDate()).slice(-2),
    startOfWeek.getFullYear(),
  ].join("/");

  const endFormatted = [
    ("0" + (endOfWeek.getMonth() + 1)).slice(-2),
    ("0" + endOfWeek.getDate()).slice(-2),
    endOfWeek.getFullYear(),
  ].join("/");

  return { startOfWeek: startFormatted, endOfWeek: endFormatted };
}

export function fDate(date) {
  return format(new Date(date), "dd MMMM yyyy");
}

export function fDateTime(date) {
  return format(new Date(date), "dd MMM yyyy HH:mm:ss");
}

export function fDateTimeSuffix(date) {
  return format(new Date(date), "dd/MM/yyyy hh:mm:ss");
}
export function f_time(date) {
  return format(new Date(date), "yyyy-MM-dd");
}
export function fa_time(date) {
  return format(new Date(date), "dd/MM/yyyy");
}

export function get_thre_digit_month(date) {
  return format(new Date(date), "yyyy-MMM-dd");
}

export function get_year_and_month_only(date) {
  return format(new Date(date), "yyyy-MM");
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export const getActualDateFormate = (inputDateString) => {
  const year = inputDateString.substring(0, 4);
  const month = inputDateString.substring(5, 7);
  const day = inputDateString.substring(8, 10);

  // Format the date in the desired format
  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
};

export const dateFormate = (date) => {
  const dt = dateTime.create(date);
  const ccdate = dt.format("Y-m-d");
  return ccdate;
};
