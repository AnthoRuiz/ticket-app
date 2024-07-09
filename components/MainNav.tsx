import Link from "next/link";
import React from "react";

const MainNav = () => {
  return (
    <div>
      <Link href="/">Dashboard</Link>
      <br />
      <Link href="/tickets">Tickets</Link>
      <br />
      <Link href="/users">Users</Link>
    </div>
  );
};

export default MainNav;
