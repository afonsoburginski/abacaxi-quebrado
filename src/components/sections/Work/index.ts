import styled from "styled-components";

interface CardPropos {
  center?: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #252b42;
  margin-bottom: 4rem;
`;

const Contact = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0 60px 0;
`;

const HeaderContact = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

const Title = styled.h1`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 40px;
  text-align: center;
  margin-bottom: -1rem;
`;

const SubTitle = styled.h4`
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  padding-bottom: 2rem;
`;

const BodyContact = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContact = styled.div<CardPropos>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  padding-top: 1rem;

  button {
    width: 100%;
    height: 44px;
    border: 1px solid;
    border-color: ${({ center }) => (center ? "#FFF" : "#00A0C1")};
    color: ${({ center }) => (center ? "#00A0C1" : "#fff")};
    border-radius: 5px;
    cursor: pointer;
    background-color: #00A0C1;
    font-size: 18px;
    font-weight: 600;
    :hover {
      transition: 400ms;
      color: ${({ center }) => (center ? "#FFF" : "#FFF")};
      border-color: ${({ center }) => (center ? "#FFA62B" : "#FFF")};
      background-color: ${({ center }) => (center ? "#FFA62B" : "transparent")};
    }
  }
`;

const IconCard = styled.div``;

const EmailCard = styled.div<CardPropos>`
  font-size: 14px;
  font-weight: 600;
  a {
    color: ${({ center }) => (center ? "#FFF" : "#252B42")};
  }
`;

const TitleCard = styled.div<CardPropos>`
  font-weight: 600;
  font-size: 16px;
  color: ${({ center }) => (center ? "#FFF" : "#252B42")};
`;

export default {
  Container,
  Contact,
  HeaderContact,
  Title,
  SubTitle,
  BodyContact,
  CardContact,
  IconCard,
  EmailCard,
  TitleCard,
};
