"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ToggleMode from "./ToggleMode";
import MainNavLinks from "./MainNavLinks";

const MainNav = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex justify-between">
      <MainNavLinks />

      <div className="flex items-center gap-2">
        <Link href="/">Logout</Link>
        {isClient && <ToggleMode />}
      </div>
    </div>
  );
};

export default MainNav;
