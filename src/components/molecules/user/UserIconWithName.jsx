import { memo, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../providers/UserProvider";

// memo化することでpropsに変更が発生しないかぎり、再レンダリングを防ぐ
export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // memo化したが、userInfo更新関数が実行された時は再レンダリングは実施される
  const { userInfo } = useContext(UserContext);
  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImag height={160} width={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImag = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
