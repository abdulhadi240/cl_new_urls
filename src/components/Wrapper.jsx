import React from "react";

const Wrapper = ({ children , full }) => {
  return (
    <div className={`relative overflow-hidden ${full ? '' : 'w-screen'} min-h-64 pb-10 pt-16 md:pt-32 bg-gradient-to-b from-primary/70 to-primary/90`}>
      {/* SVG for top curve */}
      <svg
        className="absolute top-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 250"
      >
        <path
          fill="#FFFFFF"
          d="M0,50 C300,150 1140,-10 1440,10 L1440,0 L0,0 Z"
        />
      </svg>

      {/* Children content */}
      <div className="relative">{children}</div>
    </div>
  );
};

export default Wrapper;
