import React, { useState, useRef, useEffect } from 'react';

function Select({
  value,
  onChange,
  options = [],
  placeholder = '선택하세요',
  className,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // 선택된 옵션의 라벨 찾기
  const selectedOption = options.find((opt) => opt.value === value);
  const selectedLabel = selectedOption ? selectedOption.label : '';

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // 옵션 선택 시 처리
  function handleSelect(optionValue) {
    if (onChange) {
      onChange({ target: { value: optionValue } });
    }
    setOpen(false);
  }

  return (
    <div
      className={'relative inline-block ' + (className || '')}
      ref={wrapperRef}
      {...rest}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-1 text-neutral-700 bg-white border border-neutral-500 rounded-2xl outline-none cursor-pointer"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>
          {selectedLabel || (
            <span className="text-neutral-700">{placeholder}</span>
          )}
        </span>
        <svg
          className="w-6 h-10 ml-2 text-neutral-700"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* 드롭다운이 열려 있을 때만 옵션 리스트 렌더링 */}
      {open && (
        <ul
          className="absolute mt-1 p-2 w-full text-neutral-700 bg-white border border-neutral-500 rounded-xl"
          role="listbox"
        >
          {options.map(({ value: optionValue, label }) => (
            <li
              key={optionValue}
              role="option"
              aria-selected={optionValue === value}
              className={
                'px-2 py-1 text-sm cursor-pointer hover:bg-blue-100 hover:rounded-lg ' +
                (optionValue === value
                  ? 'bg-blue-50 font-semibold rounded-md'
                  : '')
              }
              onClick={() => handleSelect(optionValue)}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Select;
