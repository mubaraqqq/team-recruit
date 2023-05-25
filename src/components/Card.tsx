import { Stack } from "@mui/material";
import chip from "../assets/icons8-chip-card-64.png";
import { Wifi } from "@mui/icons-material";
import masterCard from "../assets/icons8-mastercard.svg";

const Card = () => {
  return (
    <Stack direction="column" justifyContent="space-between" className="card">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <img src={chip} alt="card chip" />
        <Wifi sx={{ fontSize: "40px" }} />
      </Stack>
      <Stack direction="column">
        <p>Jonathan Michael</p>
        <p>•••• 3456</p>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <p>09/22</p>
        <Stack direction="column" alignItems="center">
          <img src={masterCard} alt="mastercard" />
          <span>mastercard</span>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Card;
