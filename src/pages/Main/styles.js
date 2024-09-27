import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  max-width: 78%;
  margin: auto;
  margin-top: 16px;
  margin-bottom: 24px;

  h1 {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 500;
    margin-bottom: 16px;
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 24px;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 16px;
    }
  }

  @media (max-width: 320px) {
    h1 {
      font-size: 12px;
    }
  }
`;

export const OptionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 24px;
    margin-right: 12px;
  }
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;

  select {
    height: 28px;
    width: 64px;
    border-color: #409ae9;
    border-radius: 4px;
    font-family: 'Noto Sans JP', sans-serif;
    color: #141414;
  }
`;
