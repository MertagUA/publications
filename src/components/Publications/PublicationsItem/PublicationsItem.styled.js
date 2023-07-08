import styled from '@emotion/styled';

export const Item = styled.li`
  margin-top: 10px;
  padding: 5px;
  border: 2px solid #0d6efd;
  border-radius: 10px;
  :nth-of-type(2n) {
    border: 2px solid #ff0000;
  }
`;

export const BodyText = styled.p`
  word-break: break-all;
`;
