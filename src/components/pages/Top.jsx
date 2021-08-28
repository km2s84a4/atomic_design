import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userStore";

export const Top = () => {
  const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);
  // recoil-tips:更新関数のみ使用する場合(useSetRecoilStateを使用した場合)は、再レンダリングされない
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
