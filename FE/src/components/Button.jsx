import React from 'react';

const Button = ({
  children,
  color = 'blue',
  size = 'medium',
  className = '',
  ...props
}) => {
  // 색상별
  const colorClasses = {
    blue: 'bg-primary text-white ',
    'blue-stroke': 'bg-white text-primary border border-primary',
    white: 'bg-white border border-neutral-200',
    red: 'bg-error text-white',
    gray: 'bg-neutral-200 cursor-not-allowed',
  };

  // 사이즈별
  const sizeClasses = {
    small: 'h-8 px-3 text-sm',
    medium: 'h-10 px-5 text-base',
    large: 'h-12 px-6 text-lg w-full',
    square: 'h-10 w-10 flex items-center justify-center',
  };

  // 기본 클래스
  const baseClasses = 'rounded-lg';

  // 최종 클래스
  const classes = `${baseClasses} ${colorClasses[color]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
