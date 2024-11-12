import { useEffect, useState } from "react";

export function useCalcDaysAgo(date: Date | string) {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const calculateTimeAgo = () => {
      const targetDate = new Date(date);
      const now = new Date();
      const diffInMs = now.getTime() - targetDate.getTime();
      const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

      if (diffInDays === 0) {
        setTimeAgo("Today");
      } else if (diffInDays === 1) {
        setTimeAgo("1 day ago");
      } else {
        setTimeAgo(`${diffInDays} days ago`);
      }
    };

    calculateTimeAgo();

    // Optional: Update every day in case the component remains mounted
    const intervalId = setInterval(calculateTimeAgo, 1000 * 60 * 60 * 24);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [date]);

  return timeAgo;
}
