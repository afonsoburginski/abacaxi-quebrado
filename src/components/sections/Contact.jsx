import React, { FC, ReactElement, useState } from "react";

import LocationIcon from "../../assets/icons/location.svg";
import PhoneIcon from "../../assets/icons/phone.svg";
import SendIcon from "../../assets/icons/send.svg";
import S from "../styles/styles.ts";

import styled from "styled-components";
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Modal from '../elements/Modal';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const Contact = () => {
  return (
    <S.Container>
      <div id="2">
        <S.Contact>
          <S.HeaderContact>
            <S.Title>Entrar em contato pelo WhatsApp</S.Title>
            <S.SubTitle>
              Converse com um de nossos departamentos
            </S.SubTitle>
          </S.HeaderContact>
          <S.BodyContact>
            <S.CardContact>
              <S.IconCard>
                <img src={PhoneIcon} alt="phone" />
              </S.IconCard>
              <S.EmailCard>
                <a href="mailto:confabacaxi@hotmail.com">
                  compras_confabacaxi@hotmail.com
                </a>
              </S.EmailCard>
              <S.TitleCard>COMPRAS</S.TitleCard>
              <button type="submit">
                <a href="https://api.whatsapp.com/send?phone=5566999886915&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site." target="_blank">
                  Chamar
                </a>
              </button>
            </S.CardContact>

            <S.CardContact center>
              <S.IconCard>
                <img src={LocationIcon} alt="phone" />
              </S.IconCard>
              <S.EmailCard center>
              <a href="mailto:confinamentoabacaxi@outlook.com">
                confinamentoabacaxi@outlook.com
              </a>
              </S.EmailCard>
              <S.TitleCard center>LOGÍSTICA</S.TitleCard>
              <button type="submit">
                <a href="https://api.whatsapp.com/send?phone=5566996157748&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site." target="_blank">
                  Chamar
                </a>
              </button>
            </S.CardContact>

            <S.CardContact>
              <S.IconCard>
                <img src={SendIcon} alt="phone" />
              </S.IconCard>
              <S.EmailCard>
                <a href="mailto:financeiro_abacaxi@hotmail.com">
                  financeiro_abacaxi@hotmail.com
                </a>
              </S.EmailCard>
              <S.TitleCard>FINANCEIRO</S.TitleCard>
              <button type="submit">
                <a href="https://api.whatsapp.com/send?phone=5566999859938&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site." target="_blank">
                  Chamar
                </a>
              </button>
            </S.CardContact>
          </S.BodyContact>
        </S.Contact>
      </div>
    </S.Container>
  );
};

export default Contact;