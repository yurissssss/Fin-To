import React from 'react';
import Input from '../../../components/input';

import { Search } from 'lucide-react';

export default function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = '멘토링 검색',
  className = '',
  ...rest
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit && onSubmit(value ?? '');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex justify-center ${className}`}
      {...rest}
    >
      <div className="flex items-center gap-2 pl-5 pr-4 py-2 bg-neutral-200 rounded-2xl text-sm font-neutral-500 w-full">
        <Input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent"
        />

        {/* 검색 버튼 */}
        <button
          type="submit"
          className="p-1 rounded-full cursor-pointer"
          aria-label="search"
        >
          <Search className="size-4" />
        </button>
      </div>
    </form>
  );
}
