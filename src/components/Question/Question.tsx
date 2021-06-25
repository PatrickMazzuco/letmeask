import React from "react";

import * as S from "./styles";

interface QuestionProps {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: React.ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
}

export const Question = (props: QuestionProps): JSX.Element => {
  const { content, author, isHighlighted, isAnswered } = props;
  return (
    <S.Container highlighted={isHighlighted} answered={isAnswered}>
      <S.Content>{content}</S.Content>
      <S.Footer>
        <S.UserInfo>
          <S.Avatar src={author.avatar} alt={author.name} />
          <S.UserName highlighted={isHighlighted}>{author.name}</S.UserName>
        </S.UserInfo>
        <div>{props.children}</div>
      </S.Footer>
    </S.Container>
  );
};
