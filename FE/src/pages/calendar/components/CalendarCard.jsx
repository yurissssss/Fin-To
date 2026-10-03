import Button from "../../../components/Button";

export default function CalendarCard({ time, title, status, name, onClickFunction }) {
  return (
    <div className="bg-white border border-gray-300 rounded-[15px] p-4 flex justify-between items-center h-[100px] w-[500px]">
      {/* 왼쪽 텍스트 영역 */}
      <div className="flex flex-col justify-center gap-1">
        <div className="font-semibold text-base">{title}</div>
        <div className="text-xs text-gray-600">{time}</div>
        <div className="text-xs text-gray-500">{status}</div>
        <div className="text-xs text-gray-700">{name}</div>
      </div>

      {/* 오른쪽 버튼 */}
      <div className="ml-4">
        <Button
          className="border border-gray-300 px-4 py-2 rounded-md text-sm"
          onClick={onClickFunction}
        >
          삭제하기
        </Button>
      </div>
    </div>
  );
}





