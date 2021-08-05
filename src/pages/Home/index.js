import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import { AiOutlineSearch } from 'react-icons/ai';
import api from '../../services/api';
import {Container, ContainerSearch, Title, Form, Input, SubmitButton, ContainerApi, ContainerApiInfo, ArticleApi, EmployeeDetails, ContainerDescriptions, TitleDescriptions, ImageApi, TextName, TextJob, TextAdmission, TextPhone} from './styles';

export default function Home(){
  const [employess, setEmployess] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    async function loadEmployess(){
      const response = await api.get('/employess');
      console.log(response.data);
      setEmployess(response.data);
    }

    loadEmployess();
  },[]);

  return(
    <Container>
      <Header />

      <ContainerSearch>
        <Title>Funcionários</Title>
        
        <Form>
          <Input type="text" placeholder="Pesquisar" maxLength="25" value={input} onChange={(event) => setInput(event.target.value)}/>
          <SubmitButton onClick={() => {}}>
            <AiOutlineSearch color="#000" size={24}/>
          </SubmitButton>
        </Form>
      
        <ContainerApi>
          <ContainerDescriptions>
            <TitleDescriptions>Foto</TitleDescriptions>
            <TitleDescriptions>Nome</TitleDescriptions>
            <TitleDescriptions>Cargo</TitleDescriptions>
            <TitleDescriptions>Data de Admissao</TitleDescriptions>
            <TitleDescriptions>Telefone</TitleDescriptions>
          </ContainerDescriptions>

          <ContainerApiInfo>
            {employess.map((item) => {
              return (
                <ArticleApi key={item.id}>
                  <EmployeeDetails>
                    <ImageApi>{item.photo}</ImageApi>
                    <TextName>{item.name}</TextName>
                    <TextJob>{item.job}</TextJob>
                    <TextAdmission>{item.admission_date}</TextAdmission>
                    <TextPhone>{item.phone}</TextPhone>
                  </EmployeeDetails>
                </ArticleApi>
              )
            })}
          </ContainerApiInfo>
        </ContainerApi>

      </ContainerSearch>
    </Container>
  )
}