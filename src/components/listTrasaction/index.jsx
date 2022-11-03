import React, { useCallback, useState } from "react";
import { Container, BoxInput, Text, Price, Title } from "./styles";
import api from "../../services/api";
import {
  Paper,
  InputBase,
  Divider,
  IconButton,
  Alert,
  Collapse,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

const ListTransaction = () => {
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const [transaction, setTransaction] = useState([]);

  const handleSearch = useCallback(
    async (event) => {
      event.preventDefault();
      await api
        .get(
          `/api?module=account&action=txlistinternal&address=${value}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=YourApiKeyToken`
        )
        .then((res) => {
          setTransaction(res.data.result);
          console.log("err", res.data.result);
        })
        .catch((error) => {
          console.log("err", error);
          setOpen(true);
          setTimeout(() => setOpen(false), 10000);
        });
    },
    [value]
  );

  return (
    <Container>
      <BoxInput>
        <Collapse sx={{ p: "10px" }} in={open}>
          <Alert
            variant="outlined"
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Ops falha ao buscar
          </Alert>
        </Collapse>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search Address"
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            type="button"
            onClick={handleSearch}
            sx={{ p: "10px" }}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </BoxInput>
      <Title>Transaction from address</Title>

      {Array.isArray(transaction)
        ? transaction.map((item) => (
            <div>
              <Text>
                blockNumber: <Price>{item.blockNumber}</Price>
              </Text>
              <Text>
                from: <Price>{item.from}</Price>
              </Text>
              <Text>
                gas: <Price>{item.gas}</Price>
              </Text>
              <Text>
                gasUsed: <Price>{item.gasUsed}</Price>
              </Text>
              <Text>
                hash: <Price>{item.hash}</Price>
              </Text>
              <Text>
                timeStamp: <Price>{item.timeStamp}</Price>
              </Text>
              <Text>
                to: <Price>{item.to}</Price>
              </Text>
              <Text>
                value: <Price>{item.value}</Price>
              </Text>
              <Text>
                contractAddress: <Price>{item.contractAddress}</Price>
              </Text>
              <Text>
                traceId: <Price>{item.traceId}</Price>
              </Text>
              <Text>
                input: <Price>{item.input}</Price>
              </Text>
              <Text>
                type: <Price>{item.type}</Price>
              </Text>
              <Text>
                isError: <Price>{item.isError}</Price>
              </Text>
              <Text>
                errCode: <Price>{item.errCode}</Price>
              </Text>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="horizontal" />
            </div>
          ))
        : null}
    </Container>
  );
};

export default ListTransaction;
