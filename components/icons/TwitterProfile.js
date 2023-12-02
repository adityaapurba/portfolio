import React from "react";
import { SiCodeforces } from "react-icons/si";

const TwitterProfile = ({ marginBottom }) => {
  return (
    <div className={`w-8 h-8 ${marginBottom}`}>
      <a
        href="https://codeforces.com/profile/adityasapurba"
        target="_blank"
        rel="noreferrer"
      >
        <SiCodeforces width={4} height={4} className="mt-2 ml-2"/>
      </a>
    </div>
  );
};

export default TwitterProfile;
