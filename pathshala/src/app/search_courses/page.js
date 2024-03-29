import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link className="text-blue-500" href="/dashboard">
        {"<-"} Dashboard
      </Link>
    </div>
  );
};

export default page;
