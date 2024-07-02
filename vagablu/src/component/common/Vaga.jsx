// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import styled from 'styled-components';
import faker from 'faker';

const StyledGrid = styled.div`
  width: calc(100% - 100px);
  height: calc(100vh - 140px); 
  display: grid;
  margin-top: 80px;
  margin-right: 30px;
  margin-bottom: 60px;
  padding: 40px;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.3);
  border-radius: 16px;
  overflow: auto;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const Vaga = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: ${props => (props.reserved ? '#ff6347' : '#98fb98')};
  color: ${props => (props.reserved ? '#fff' : '#000')};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  &:hover {
    background-color: ${props => (props.reserved ? '#ff4500' : '#32cd32')};
    color: #fff;
  }
`;

const Vagas = () => {
    const [reservas, setReservas] = useState(Array(20).fill({ reserved: false, nome: '' }));

    const reservarVaga = (index) => {
        setReservas(reservas.map((reserva, i) => {
            if (i === index) {
                return {
                    reserved: !reserva.reserved,
                    nome: reserva.reserved ? '' : faker.name.findName() // Gera um nome fictício ao reservar a vaga
                };
            }
            return reserva;
        }));
    };

    return (
        <StyledGrid>
            <Container>
                {reservas.map((reserva, index) => (
                    <Vaga key={index} reserved={reserva.reserved} onClick={() => reservarVaga(index)}>
                        {index + 1}
                    </Vaga>
                ))}
            </Container>
        </StyledGrid>
    );
};

export default Vagas;