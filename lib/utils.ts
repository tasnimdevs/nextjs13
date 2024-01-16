import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const timeDifference = now.getTime() - createdAt.getTime();

  // Define time units in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  // Calculate time ago
  if (timeDifference < minute) {
    const secondsAgo = Math.floor(timeDifference / 1000);
    return `${secondsAgo} second${secondsAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifference < hour) {
    const minutesAgo = Math.floor(timeDifference / minute);
    return `${minutesAgo} minute${minutesAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifference < day) {
    const hoursAgo = Math.floor(timeDifference / hour);
    return `${hoursAgo} hour${hoursAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifference < week) {
    const daysAgo = Math.floor(timeDifference / day);
    return `${daysAgo} day${daysAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifference < month) {
    const weeksAgo = Math.floor(timeDifference / week);
    return `${weeksAgo} week${weeksAgo === 1 ? '' : 's'} ago`;
  } else if (timeDifference < year) {
    const monthsAgo = Math.floor(timeDifference / month);
    return `${monthsAgo} month${monthsAgo === 1 ? '' : 's'} ago`;
  } else {
    const yearsAgo = Math.floor(timeDifference / year);
    return `${yearsAgo} year${yearsAgo === 1 ? '' : 's'} ago`;
  }
};

// Example usage
const createdAt = new Date('2024-01-10T12:00:00Z');
console.log(getTimestamp(createdAt)); // Output: e.g., '5 days ago'



export const formatAndDivideNumber = (inputNumber: number): string => {
  let formattedNumber: string;
  let divisor: number;

  if (inputNumber >= 1000000) {
    formattedNumber = (inputNumber / 1000000).toFixed(1);
    divisor = 1000000;
  } else if (inputNumber >= 1000) {
    formattedNumber = (inputNumber / 1000).toFixed(1);
    divisor = 1000;
  } else {
    formattedNumber = inputNumber.toFixed(1);
    divisor = 1;
  }

  // Remove trailing .0 (if any)
  formattedNumber = formattedNumber.replace(/\.0$/, '');

  // Add the appropriate extension
  formattedNumber += divisor === 1 ? '' : divisor === 1000000 ? 'M' : 'K';

  // Immediately divide the number by the corresponding factor
  inputNumber /= divisor;

  return `${formattedNumber}`;
};



