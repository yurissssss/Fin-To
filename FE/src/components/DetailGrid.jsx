import React from 'react';

export default function DetailGrid({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="text-neutral-500 mr-6">{item.label}</div>
          <div>{item.value}</div>
        </React.Fragment>
      ))}
    </div>
  );
}
