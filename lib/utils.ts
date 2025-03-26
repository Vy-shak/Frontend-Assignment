import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
const options: Intl.DateTimeFormatOptions = {  
  day: "2-digit",     
  month: "short",   
  weekday: "long" 
};


function formatDate(date:Date) {
  const formatted = date.toLocaleDateString('en-GB', options);
  
  const [day, month, weekday] = formatted.split(' ');
  return `${day} ${month}, ${weekday}`;
}

export {formatDate}
