import React from 'react';

function Input({
  type = 'text',
  placeholder = '여기에 입력하세요',
  value,
  onChange,
  className,
  ...rest
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
      className={
        'outline-none border-none focus:outline-none focus:ring-0 ' +
        (className || '')
      }
      {...rest}
    />
  );
}

export default Input;
