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
  border-color: #cdcdcd;
`;

export const SearchIcon = styled.image`
  position: absolute;
  margin-top: 45px;
  margin-left: 13rem;
  border: 0px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
`;

export const ContainerApi = styled.div`
  position: absolute;
  width: 96.5%;
  margin-top: 45rem;
  margin-left: 32px;
  border: 1px solid lightgray;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const ContainerDescriptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 49px;
  background-color: #5984c0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const TitleDescriptions = styled.p`
  font-size: 18px;
  color: #ffffff;
`;

export const ContainerApiInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const ArticleApi = styled.div`
  background-color: #ffffff;
  width: 100%;
`;

export const EmployeeDetails = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 55px;
  border-bottom: 1px solid lightgray;
`;

export const ImageApi = styled.img`
  position: absolute;
  float: left;
  width: 39px;
  height: 33px;
  margin-right: 92.5rem;
`;

export const TextName = styled.p`
  position: absolute;
  margin-left: -50.5rem;
  width: 50px;
`;

export const TextJobApi = styled.p`
  position: absolute;
  margin-left: -8rem;
`;

export const TextAdmissionApi = styled.p`
  position: absolute;
  margin-left: 40rem;
`;

export const TextPhoneApi = styled.p`
  position: absolute;
  margin-left: 90rem;
`;
