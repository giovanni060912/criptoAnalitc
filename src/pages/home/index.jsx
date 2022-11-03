import React from "react";
import GasPrice from "../../components/gasPrice";
import Header from "../../components/header";
import InputSearch from "../../components/listTrasaction";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <Header />
      <GasPrice />
      <InputSearch />
    </Container>
  );
};

export default Home;
