import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitUploadFiles } from "../../state/features/docs/docActions";
import { docStateUpdate } from "../../state/features/docs/docSlice";
import Boompay from "./positiveacccountlinks/Boompay";
import ChexSystems from "./positiveacccountlinks/ChexSystems";
import ClarityServices from "./positiveacccountlinks/ClarityServices";
import Credit from "./positiveacccountlinks/Credit";
import CreditStrong from "./positiveacccountlinks/CreditStrong";
import Experian from "./positiveacccountlinks/Experian";
import Innovice from "./positiveacccountlinks/Innovice";
import Kikoff from "./positiveacccountlinks/Kikoff";
import Sagestreamilc from "./positiveacccountlinks/Sagestreamilc";
import Self from "./positiveacccountlinks/Self";
import SmartCredit from "./positiveacccountlinks/SmartCredit";

const PositiveAccount = (props, ref) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const [checkedAccount, setCheckedAccount] = useState(false);
  const theme = useTheme();

  useImperativeHandle(ref, () => ({
    open() {
      setOpen(true);
    },
    checked: checked,
  }));

  const dispatch = useDispatch();

  const {
    photo_ID,
    proof_of_address,
    user_agreement_freeze,
    lexis_nexis_freeze,
    consumer_office_freeze,
    positive_account,
    boomplay,
    kikoff,
    self,
    creditstrong,
    credit,
    innovice,
    clarityservices,
    chexsystem,
    sagestreamilc,
    smartcredit,
  } = useSelector((store) => store.docs);
  const { email } = useSelector((store) => store.auth);

  useEffect(() => {
    if (
      boomplay &&
      kikoff &&
      self &&
      creditstrong &&
      credit &&
      innovice &&
      clarityservices &&
      chexsystem &&
      sagestreamilc &&
      smartcredit
    ) {
      setCheckedAccount((prev) => !prev);
    }
  }, [
    boomplay,
    chexsystem,
    clarityservices,
    credit,
    creditstrong,
    innovice,
    kikoff,
    sagestreamilc,
    self,
    smartcredit,
  ]);

  useEffect(() => {
    if (checkedAccount) {
      dispatch(
        docStateUpdate({
          photo_ID,
          email,
          proof_of_address,
          user_agreement_freeze,
          consumer_office_freeze,
          lexis_nexis_freeze,
          boomplay,
          chexsystem,
          clarityservices,
          credit,
          creditstrong,
          innovice,
          kikoff,
          sagestreamilc,
          self,
          smartcredit,
          positive_account: checkedAccount,
        })
      );
    } else {
      docStateUpdate({
        photo_ID,
        email,
        proof_of_address,
        user_agreement_freeze,
        consumer_office_freeze,
        lexis_nexis_freeze,
        positive_account: checkedAccount,
      });
    }
  }, [
    boomplay,
    checkedAccount,
    chexsystem,
    clarityservices,
    consumer_office_freeze,
    credit,
    creditstrong,
    dispatch,
    email,
    innovice,
    kikoff,
    lexis_nexis_freeze,
    photo_ID,
    proof_of_address,
    sagestreamilc,
    self,
    smartcredit,
    user_agreement_freeze,
  ]);

  const handleClose = () => {
    setOpen(false);

    dispatch(
      submitUploadFiles({
        photo_ID,
        email,
        proof_of_address,
        user_agreement_freeze,
        consumer_office_freeze,
        lexis_nexis_freeze,
        positive_account,
      })
    );
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  fontWeight: 800,
                  color: theme.palette.grey[800],
                }}
              >
                Positive Account
              </Typography>
              <Typography variant="body2">
                Visit the following website to your positive accounts
              </Typography>
              <List
                dense
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <Boompay />
                <Kikoff />
                <Self />
                <CreditStrong />
                <Experian />
                <Credit />
                <Innovice />
                <ClarityServices />
                <ChexSystems />
                <Sagestreamilc />
                <SmartCredit />
              </List>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default forwardRef(PositiveAccount);
