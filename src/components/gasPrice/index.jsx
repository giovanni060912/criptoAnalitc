import React, { useCallback, useEffect, useState } from "react";
import { Container, Price, Text } from "./styles";
import api from "./../../services/api";

const GasPrice = () => {
  const [gasPrice, setGasPrice] = useState();
  const getPrice = useCallback(async () => {
    await api
      .get("/api?module=gastracker&action=gasoracle&apikey=YourApiKeyToken")
      .then(async function (response) {
        setGasPrice(response.data.result.SafeGasPrice);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    setTimeout(() => {
      getPrice();
    }, "7000");
  }, [getPrice]);
  return (
    <Container>
      <Text>
        Gas Price: <Price>{gasPrice}</Price>
      </Text>
    </Container>
  );
};

export default GasPrice;
