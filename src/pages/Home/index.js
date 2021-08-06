import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import { AiOutlineSearch } from 'react-icons/ai';
import api from '../../services/api';
import {Container, ContainerSearch, Title, Form, Input, SubmitButton, ContainerApi, ContainerApiInfo, ArticleApi, EmployeeDetails, ContainerDescriptions, TitleDescriptions, ImageApi, TextApi,TextName} from './styles';

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

  const filterEmployess = employess.filter( employee => {
    return employee.name.toLowerCase().includes(input.toLowerCase());
  });

  function formatDate(dateInput) {
    var dateObj = new Date(dateInput);
    var dateString = [
      dateObj.getDate(),
      dateObj.getMonth(),
      dateObj.getFullYear()
    ].join('/');
  
    return dateString;
  }
  
  console.log(formatDate('2019-12-02T00:00:00.000'));
  console.log(employess.admission_date)

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
            {filterEmployess.map((item) => {
              return (
                <ArticleApi key={item.id}>
                  <EmployeeDetails>
                    <ImageApi src={item.image}/>
                    <TextName>{item.name}</TextName>
                    <TextApi>{item.job}</TextApi>
                    {/* <TextApi>{item.admission_date}</TextApi> */}
                    <TextApi>{formatDate(item.admission_date)}</TextApi>
                    <TextApi>{item.phone}</TextApi>
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