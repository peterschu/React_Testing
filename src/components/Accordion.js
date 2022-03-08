import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`

`;

const Container = styled.div`

`;

const Wrap = styled.div`

`;

const Dropdown = styled.div`

`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      setClicked2(null);
      return setClicked(null);

    }

    setClicked(index);
  };

  const toggle2 = index2 => {
    if (clicked2 === index2) {
      //if clicked question is already active, then close it
      return setClicked2(null);
    }

    setClicked2(index2);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {Data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                      {Data.map((item2, index2) => {
                        return (
                          <>
                            <Wrap onClick={() => toggle2(index2)} key={index2}>
                              <h1>{item2.question}</h1>
                              <span>{clicked2 === index2 ? <FiMinus /> : <FiPlus />}</span>
                            </Wrap>
                            {clicked2 === index2 ? (
                              <Dropdown>
                                <p>{item2.answer}</p>
                              </Dropdown>
                            ) : null}
                          </>
                        );
                      })}
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
