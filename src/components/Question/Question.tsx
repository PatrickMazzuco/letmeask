import React from "react";

import * as S from "./styles";

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: React.ReactNode;
}

export const Question = (props: QuestionProps): JSX.Element => {
  const { content, author } = props;
  return (
    <S.Container>
      <S.Content>{content}</S.Content>
      <S.Footer>
        <S.UserInfo>
          <S.Avatar src={author.avatar} alt={author.name} />
          <S.UserName>{author.name}</S.UserName>
        </S.UserInfo>
        <div>{props.children}</div>
      </S.Footer>
    </S.Container>
  );
};
