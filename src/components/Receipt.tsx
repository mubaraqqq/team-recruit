import { Stack } from "@mui/material";
import apple from "../assets/icons8-apple (1).svg";
import { ReceiptLong } from "@mui/icons-material";

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
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="column" className="receipt-stub" gap="5px">
          <p>You have to pay</p>
          <p>
            <span>549</span>
            <span>.99</span>
            <span>USD</span>
          </p>
        </Stack>
        <ReceiptLong sx={{ fontSize: "50px", opacity: "0.5" }} />
      </Stack>
    </Stack>
  );
};

export default Receipt;
