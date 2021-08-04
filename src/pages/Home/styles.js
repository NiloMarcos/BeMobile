import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  margin-top: 44px;
  margin-left: 34px;
  font-size: 24px;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  font-size: 16px;
  width: 282px;
  height: 40px;
  margin-top: 44px;
  margin-right: 35px;
  padding-left: 12px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: #CDCDCD;
`;

export const SubmitButton = styled.button`
  position: absolute;
  margin-top: 45px;
  margin-left: 13rem;
  border: 0px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;