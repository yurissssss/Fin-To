import React from "react";
import BasicModal from "../../components/BasicModal";
import { useNavigate } from "react-router-dom";

export default function ReserveModal() {
  const navigate = useNavigate();

  return (
    <BasicModal
      title=""
      bgOpacity={100}
      leftText="Cancel"
      rightText="Reserve"
      onClick1={() => navigate("/")}
      onClick2={() => navigate("/settings/mentor-register")}
    >
      <div className="text-center text-lg font-medium mb-6">
        다음 일정을 예약하러 가시겠습니까?
      </div>
    </BasicModal>
  );
}






