import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import { AiOutlineSearch } from "react-icons/ai";
import api from "../../services/api";
import {
  Container,
  ContainerSearch,
  Title,
  Form,
  Input,
  SearchIcon,
  ContainerApi,
  ContainerApiInfo,
  ArticleApi,
  EmployeeDetails,
  ContainerDescriptions,
  TitleDescriptions,
  ImageApi,
  TextName,
  TextJobApi,
  TextAdmissionApi,
  TextPhoneApi,
} from "./styles";

export default function Home() {
  const [employess, setEmployess] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function loadEmployess() {
      const response = await api.get("/employess");
      console.log(response.data);
      setEmployess(response.data);
    }

    loadEmployess();
  }, []);

  const filterEmployess = employess.filter((employee) => {
    return employee.name.toLowerCase().includes(input.toLowerCase());
  });

  function formatDate(dateInput) {
    var dateObj = new Date(dateInput);
    var dateString = [
      dateObj.getDate(),
      dateObj.getMonth(),
      dateObj.getFullYear(),
    ].join("/");

    return dateString;
  }

  function formatPhone(input) {
    if (!input || isNaN(input))
      return `a entrada deve ser um número enviado ${input}`;
    if (typeof input !== "string") input = input.toString();
    if (input.length === 13) {
      return input.replace(/(\d{2})(\d{2})(\d{5})(\d{3})/, "$1-$2-$3-$4");
    } else if (input.length < 13) {
      return "Por favor, passe um número de 13 dígitos";
    } else if (input.length > 13) {
      return "Foi fornecido muitos números, digite um número de 13 dígitos";
    } else {
      return "Ops, algo deu errado!";
    }
  }

  return (
    <Container>
      <Header />

      <ContainerSearch>
        <Title>Funcionários</Title>

        <Form>
          <Input
            type="text"
            placeholder="Pesquisar"
            maxLength="25"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <SearchIcon>
            <AiOutlineSearch color="#000" size={24} />
          </SearchIcon>
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
                    <ImageApi src={item.image} />
                    <TextName>{item.name}</TextName>
                    <TextJobApi>{item.job}</TextJobApi>
                    <TextAdmissionApi>
                      {formatDate(item.admission_date)}
                    </TextAdmissionApi>
                    <TextPhoneApi>{formatPhone(item.phone)}</TextPhoneApi>
                  </EmployeeDetails>
                </ArticleApi>
              );
            })}
          </ContainerApiInfo>
        </ContainerApi>
      </ContainerSearch>
    </Container>
  );
}
