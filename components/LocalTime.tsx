"use client";

import { useEffect, useState } from "react";
import { site } from "../lib/content";

export default function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: site.timezone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="local-time" suppressHydrationWarning>
      {site.location} · {time || "--:--"} {site.timezoneLabel.split(" ")[0]}
    </span>
  );
}
