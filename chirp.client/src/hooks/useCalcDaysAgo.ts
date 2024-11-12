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
