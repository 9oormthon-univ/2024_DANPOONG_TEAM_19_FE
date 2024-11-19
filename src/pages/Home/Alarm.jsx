import React from "react";
import * as C from "../../styles/CommonStyle";
import * as A from "../../styles/Home/AlarmStyle";

const Alarm = () => {
  return (
    <C.Page>
      <C.Center>
        <C.PageSpace>
          <A.Alarm>
            <A.AlarmItem isRead={true}>
              <A.AlarmText>박복순닙이 [하트키링] 구매를 요청하였습니다.</A.AlarmText>
            </A.AlarmItem>
            <A.AlarmItem isRead={false}>
              <A.AlarmText>
                박복순닙이
                [하트키링하트키링하트키링하트키링하트키링하트키링하트키링하트키링하트키링하트키링하트키링하트키링하트키링하트키링하트키링하트키링하트키링]
                구매를 요청하였습니다.
              </A.AlarmText>
            </A.AlarmItem>
          </A.Alarm>
        </C.PageSpace>
      </C.Center>
    </C.Page>
  );
};

export default Alarm;
