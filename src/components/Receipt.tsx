import { Stack } from "@mui/material";
import apple from "../assets/icons8-apple (1).svg";

const Receipt = () => {
  return (
    <Stack className="receipt" direction="column" justifyContent="flex-end">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <p className="detail">Company</p>
        <Stack direction="row" gap="5px" alignItems="center">
          <img src={apple} alt="apple" />
          <p className="value">Apple</p>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <p className="detail">Order Number</p>
        <p className="value">1266021</p>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <p className="detail">Product</p>
        <p className="value">Macbook Air</p>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <p className="detail">VAT(20%)</p>
        <p className="value">$100.00</p>
      </Stack>
      <hr />
    </Stack>
  );
};

export default Receipt;
