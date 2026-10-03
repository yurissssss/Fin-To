import React from 'react';
import { Select, SelectItem } from '@heroui/select';

export default function ReviewSortSelect({ value, onChange }) {
  return (
    <Select
      aria-label="리뷰 정렬"
      className="w-40"
      placeholder="평점 높은 순"
      selectedKeys={value}
      variant="bordered"
      onSelectionChange={onChange}
    >
      <SelectItem key="top">평점 높은 순</SelectItem>
      <SelectItem key="low">평점 낮은 순</SelectItem>
      <SelectItem key="new">최신순</SelectItem>
    </Select>
  );
}
