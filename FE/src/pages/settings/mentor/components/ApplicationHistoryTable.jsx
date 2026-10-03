import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  getKeyValue,
} from '@heroui/react';

const columns = [
  { key: 'applicant', label: '신청자명' },
  { key: 'email', label: '이메일' },
  { key: 'mentoring_title', label: '멘토링명' },
  { key: 'status', label: '상태' },
];

const statusColorMap = {
  '수락 대기': 'warning',
  '수락 완료': 'success',
  거절: 'danger',
  취소: 'default',
  '멘토링 완료': 'primary',
};

export default function ApplicationHistoryTable({ rows = [], onRowClick }) {
  const renderCell = React.useCallback((item, columnKey) => {
    const cellValue = getKeyValue(item, columnKey);

    if (columnKey === 'status') {
      return (
        <Chip
          className="capitalize"
          color={statusColorMap[cellValue]}
          size="sm"
          variant="flat"
        >
          {cellValue}
        </Chip>
      );
    }

    return cellValue;
  }, []);

  return (
    <Table aria-label="멘토링 신청 내역">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow
            key={item.key}
            onClick={() => onRowClick && onRowClick(item)}
            className="cursor-pointer"
          >
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
