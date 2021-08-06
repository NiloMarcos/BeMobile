import React from "react";
import Logo from "../../assets/logo.png";
import { Container, Image } from "./styles";

export default function Home() {
  return (
    <Container>
      <Image src={Logo} />
    </Container>
  );
}
