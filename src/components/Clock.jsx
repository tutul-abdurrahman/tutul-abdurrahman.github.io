import { useEffect, useState } from "react";

/* A small live detail: local time in Dhaka, so the page is never frozen. */
export default function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());

    setTime(format());
    const id = setInterval(() => setTime(format()), 20000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="stat-clock">
      <b>{time || "--:--"} GMT+6</b>
      <span>Local time, Dhaka</span>
    </div>
  );
}
