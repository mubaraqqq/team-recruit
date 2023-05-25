import { Grid, Stack } from "@mui/material";
import "./App.scss";
import { CreditCard } from "@mui/icons-material";
import CardForm from "./components/CardForm";
import Card from "./components/Card";
import Receipt from "./components/Receipt";

function App() {
  return (
    <Grid
      container
      width="95%"
      mx="auto"
      my="50px"
      height="auto"
      minHeight="500px"
      bgcolor="#ffffff"
      rowGap={{ xs: "70px", md: "0" }}
      p={{ xs: "2em 1em", sm: "4em 1.5em", md: "4em 3em" }}
    >
      <Grid item className="item-one" xs={12} md={7}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb="2em"
        >
          <Stack direction="row" alignItems="center" gap="15px">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              width="40px"
              height="40px"
              bgcolor="#025efe"
              borderRadius="50%"
            >
              <CreditCard sx={{ color: "#ffffff", m: "auto" }} />
            </Stack>
            <h1>
              <span>AceCoin</span>Pay
            </h1>
          </Stack>

          <Stack direction="row" gap="5px" alignItems="center">
            <span className="clock">0</span>
            <span className="clock">1</span>
            <span>:</span>
            <span className="clock">1</span>
            <span className="clock">9</span>
          </Stack>
        </Stack>

        <CardForm />
      </Grid>
      <Grid item className="item-one" xs={12} md={5}>
        <Stack direction="column" alignItems="center">
          <Card />
          <Receipt />
        </Stack>
      </Grid>
    </Grid>
  );
}

export default App;
