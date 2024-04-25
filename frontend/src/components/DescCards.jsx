import React from "react";

function DescCards({
    title,
    icon,
    description
}) {
  return (
    <div className="mt-6">
      <div className="flex flex-col gap-2 flex-wrap flex-1">
        <div >
          {icon}
        </div>
        <p className="">{title}</p>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
}

export default DescCards;
