import { CheckCircle, Edit, ViewCompact } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import masterCard from "../assets/icons8-mastercard.svg";

const CardForm = () => {
  return (
    <Stack direction="column" className="card-form-container" spacing="30px">
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <h3>Card Number</h3>
            <p>Enter the 16-digit card number on the card</p>
          </Box>
          <Stack direction="row" alignItems="center" gap="10px">
            <Edit sx={{ color: "#025efe" }} />
            <p>Edit</p>
          </Stack>
        </Stack>
        <div className="input-container">
          <img src={masterCard} alt="mastercard" />
          <input
            type="number"
            placeholder="2412   -   7512    -   3412   -   3456"
          />
          <CheckCircle sx={{ color: "#025efe" }} />
        </div>
      </Box>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "flex-start", sm: "space-between" }}
        gap={{ xs: 0, sm: "30px" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
      >
        <Box>
          <h3>CVV Number</h3>
          <p>Enter the 3 or 4-digit number on the card</p>
        </Box>
        <Box width={{ xs: "100%", sm: "50%" }}>
          <div className="input-container input-centre">
            <input type="number" defaultValue="327" />
            <ViewCompact />
          </div>
        </Box>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "flex-start", sm: "space-between" }}
        gap={{ xs: 0, sm: "30px" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
      >
        <Box>
          <h3>Expiry date</h3>
          <p>Enter the expiration date of the card</p>
        </Box>
        <Stack
          direction="row"
          gap="10px"
          alignItems="center"
          width={{ xs: "100%", sm: "50%" }}
        >
          <div className="input-container">
            <input type="number" defaultValue="09" />
          </div>
          /
          <div className="input-container">
            <input type="number" defaultValue="22" />
          </div>
        </Stack>
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={{ xs: "flex-start", sm: "space-between" }}
        gap={{ xs: 0, sm: "30px" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
      >
        <Box>
          <h3>Password</h3>
          <p>Enter your Dynamic Password</p>
        </Box>
        <Box width={{ xs: "100%", sm: "50%" }}>
          <div className="input-container">
            <input type="password" defaultValue="1245365474" />
            <ViewCompact />
          </div>
        </Box>
      </Stack>
      <button>Pay Now</button>
    </Stack>
  );
};

export default CardForm;
