import { useEffect, useState } from "react";

export function useCalcDaysAgo(date: Date | string) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const targetDate = new Date(date);
      const now = new Date();
      const diffInMs = now.getTime() - targetDate.getTime();

      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

      if (diffInMinutes < 60) {
        setTimeAgo(`${diffInMinutes} mins ago`);
      } else if (diffInHours < 24) {
        setTimeAgo(`${diffInHours} hrs ago`);
      } else if (diffInDays === 1) {
        setTimeAgo("1 day ago");
      } else if (diffInDays > 1) {
        setTimeAgo(`${diffInDays} days ago`);
      } else {
        setTimeAgo("Today");
      }
    };

    calculateTimeAgo();

    const intervalId = setInterval(calculateTimeAgo, 1000 * 60);

    return () => clearInterval(intervalId);
  }, [date]);

  return timeAgo;
}

export function formatTimePosted(timePosted: Date): string {
  const date = new Date(timePosted);

  // Format hours and minutes
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format, handle 0 as 12

  // Format date
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" }); // Abbreviated month
  const year = date.getFullYear();

  // Ordinal suffix for day
  const ordinalSuffix = (n: number): string => {
    if (n > 3 && n < 21) return "th"; // Special cases for 11th-13th
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${ampm} - ${month} ${day}${ordinalSuffix(day)}, ${year}`;
}
