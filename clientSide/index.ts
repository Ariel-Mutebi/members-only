import { formatDistanceToNow } from "date-fns";

const timeElements = document.getElementsByTagName("time");

for (const timeElement of Array.from(timeElements)) {
  timeElement.innerText = formatDistanceToNow(new Date(timeElement.dateTime), { addSuffix: true });
}