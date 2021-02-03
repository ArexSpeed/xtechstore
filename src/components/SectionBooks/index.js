import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  Content,
  H1,
  P,
  BooksSection,
  BookCard,
  BookImg,
  BookTitle,
  BookHoverTitle,
  BookDesc,
  BookButton,
  BookCardHover,
  BookDetails,
  Tr,
  Td,
} from "./XBookStyled";
import { WaveUp, WaveDown } from "../SectionWave";
import imgXphoneOne from "../../images/xphone2.jpg";
import { xbooks } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.css";
function SectionBooks() {
  const [hover, setHover] = useState(false);
  const [displayBookCardHover, setDisplayBookCardHover] = useState(-1);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  //Show and hide card on specific index to hover only chosen
  const showCardHover = (index) => {
    setDisplayBookCardHover(index);
    setTransition(true);
  };
  const hideCardHover = () => {
    setDisplayBookCardHover(-1);
    setTransition(false);
  };

  const showBooks = xbooks.map((xbook, index) => (
    <BookCard
      data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`}
      onMouseEnter={() => showCardHover(index)}
      onMouseLeave={hideCardHover}
      cardNo={index}
    >
      <BookCardHover
        display={displayBookCardHover === index}
        transition={transition}
        cardNo={index}
      >
        <BookDetails cardNo={index}>
          <BookHoverTitle cardNo={index}>{xbook.name}</BookHoverTitle>
          <Tr cardNo={index}>
            <Td>CPU:</Td>
            <Td>{xbook.cpu}</Td>
          </Tr>

          <Tr cardNo={index}>
            <Td>RAM:</Td>
            <Td>{xbook.ram}</Td>
          </Tr>

          <Tr cardNo={index}>
            <Td>Storage:</Td>
            <Td>{xbook.storage}</Td>
          </Tr>
          <Tr cardNo={index}>
            <Td>Size:</Td>
            <Td>{xbook.size}</Td>
          </Tr>
          <Tr cardNo={index}>
            <Td>Battery:</Td>
            <Td>{xbook.battery}</Td>
          </Tr>
          <Tr cardNo={index}>
            <Td>Price:</Td>
            <Td>{xbook.price}</Td>
          </Tr>
          <BookButton cardNo={index}>Check more</BookButton>
        </BookDetails>
      </BookCardHover>
      <BookImg></BookImg>
      <BookTitle>{xbook.name}</BookTitle>
      <BookDesc>
        {xbook.size} / {xbook.ram} / {xbook.storage}
      </BookDesc>
    </BookCard>
  ));
  return (
    <>
      <Container id="ultrabooks">
        <Content>
          <H1>The best and fastest ultrabooks in the world with new XBook</H1>
          <P>
            Choose the most powerful ultrabooks and start start creating amazing
            things.
          </P>
          <BooksSection>{showBooks}</BooksSection>
        </Content>
      </Container>
    </>
  );
}

export default SectionBooks;
