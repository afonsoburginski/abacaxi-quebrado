import React, { FC, ReactElement, useState } from "react";

import LocationIcon from "../../../assets/icons/location.svg";
import PhoneIcon from "../../../assets/icons/phone.svg";
import SendIcon from "../../../assets/icons/send.svg";
import S from "./index.ts";
import "./index.css";

import { db } from "./firebase";

import { SectionSplitProps } from '../../../utils/SectionProps';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Work = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  
  return (
    <S.Container>
      <S.Contact>
        <S.HeaderContact>

        <S.Title>Trabalhe conosco</S.Title>
        <S.SubTitle>Faça parte de nossa equipe.</S.SubTitle>

        </S.HeaderContact>
        <form className="form" onSubmit={handleSubmit}>
          
          <label>Nome</label>
          <input
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email</label>
          <input
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Mensagem</label>
          <textarea
            placeholder="Escreva uma mensagem"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <S.CardContact>  
            <button type="submit">
              Enviar
            </button>
          </S.CardContact>
        </form>
      </S.Contact>
    </S.Container>
  );
};

export default Work;