import React from 'react';
import { Input } from '@heroui/react';

import { ArrowLeft } from 'lucide-react';

export default function TwoInputBox({
  pageTitle = '',
  title = '',
  originTitle = '',
  content = '',
  originContent = '',
  onBack,
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2 mb-8">
        <button
          type="button"
          aria-label="back"
          onClick={onBack}
          className="cursor-pointer transition hover:transform hover:scale-110"
        >
          <ArrowLeft className="size-5" />
        </button>
        <h1
          className="ml-3 text-xl font-semibold text-neutral-900"
          data-testid="twoinputbox-title"
        >
          {pageTitle}
        </h1>
      </div>

      <div>{title}</div>
      <Input
        type="text"
        defaultValue={originTitle}
        className="w-full rounded-xl  focus:outline-none"
      />
      <div>{content}</div>
      <Input
        type="text"
        defaultValue={originContent}
        className="w-full rounded-xl focus:outline-none"
      />
    </div>
  );
}
