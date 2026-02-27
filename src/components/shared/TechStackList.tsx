import React from "react";

const TechStackList = ({ children, title }: { children: React.ReactNode; title: string }) => {
  return (
    <div className="flex justify-start gap-2 items-center">
      <p className="text-neutral-300 font-semibold text-xl min-w-40">{title}</p>
      {children}
    </div>
  );
};

export default TechStackList;
