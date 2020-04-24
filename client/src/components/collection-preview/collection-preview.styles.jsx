import styled from 'styled-components';

export const CollectionPreviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleDiv = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  &:hover {
    color: grey;
  }
`;

export const PreviewDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
