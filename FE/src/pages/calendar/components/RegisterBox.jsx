import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

export default function RegisterBox() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // "/" → DefaultLayout 안의 MentoringPage
  };

  return (
    <div className="p-4 border rounded-md">
      <div className="font-semibold mb-2">* 주의사항</div>
      <div className="text-sm text-gray-600 mb-4">
        중도포기시 어쩌구저쩌구 법에 의하여 뭔가 불이익이 발생합니다.
      </div>

      {/* 버튼 중앙 정렬 */}
      <div className="flex justify-center">
        <Button
          className="border border-gray-300 px-6 py-2 rounded-md"
          onClick={handleClick}
        >
          신청하기
        </Button>
      </div>
    </div>
  );
}

