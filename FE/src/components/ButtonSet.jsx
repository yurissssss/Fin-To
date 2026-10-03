import React from 'react';
import Button from './Button';

const ButtonSet = ({
  size = 'medium',
  className = '',
  leftText = 'Cancel',
  rightText = 'Confirm',
  onCancel,
  onConfirm,
}) => {
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      <Button color="blue-stroke" size={size} onClick={onCancel}>
        {leftText}
      </Button>
      <Button color="blue" size={size} onClick={onConfirm}>
        {rightText}
      </Button>
    </div>
  );
};

export default ButtonSet;
