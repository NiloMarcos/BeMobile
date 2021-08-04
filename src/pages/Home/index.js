import React from 'react';
import Header from '../../components/Header';
import { AiOutlineSearch } from 'react-icons/ai';
import {Container, ContainerSearch, Title, Form, Input, SubmitButton} from './styles';

export default function Home(){
  return(
    <Container>
      <Header />

      <ContainerSearch>
        <Title>Funcionários</Title>
        
        <Form onSubmit={() => {}}>
          <Input placeholder="Pesquisar" maxLength="29"/>
          <SubmitButton>
            <AiOutlineSearch color="#000" size={24}/>
          </SubmitButton>
        </Form>
      
      </ContainerSearch>
    </Container>
  )
}