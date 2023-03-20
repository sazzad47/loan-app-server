import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { docStateUpdate } from "../../../state/features/docs/docSlice";
import api from "../../../state/api/api";

const Sagestreamilc = () => {
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();

  const {
    photo_ID,
    proof_of_address,
    user_agreement_freeze,
    lexis_nexis_freeze,
    consumer_office_freeze,
    boomplay,
    kikoff,
    self,
    creditstrong,
    credit,
    innovice,
    clarityservices,
    chexsystem,
  } = useSelector((store) => store.docs);
  const { email } = useSelector((store) => store.auth);

  const onChange = () => {
    setChecked((prev) => !prev);
  };

  const saveData = () => {
    setChecked(!checked);
    saveToDb();
  };

  const saveToDb = async () => {
    // console.log(!checked);

    try {
      const res = await api.put(`/docs/${email}`, {
        sagestreamilc: !checked,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   if (checked) {
  //     dispatch(
  //       docStateUpdate({
  //         photo_ID,
  //         email,
  //         proof_of_address,
  //         user_agreement_freeze,
  //         consumer_office_freeze,
  //         lexis_nexis_freeze,
  //         boomplay,
  //         kikoff,
  //         self,
  //         creditstrong,
  //         credit,
  //         innovice,
  //         clarityservices,
  //         chexsystem,
  //         sagestreamilc: checked,
  //       })
  //     );
  //   } else {
  //     docStateUpdate({
  //       photo_ID,
  //       email,
  //       proof_of_address,
  //       user_agreement_freeze,
  //       consumer_office_freeze,
  //       lexis_nexis_freeze,

  //       boomplay,
  //       kikoff,
  //       self,
  //       creditstrong,
  //       credit,
  //       innovice,
  //       clarityservices,
  //       chexsystem,
  //       sagestreamilc: checked,
  //     });
  //   }
  // }, [
  //   boomplay,
  //   checked,
  //   chexsystem,
  //   clarityservices,
  //   consumer_office_freeze,
  //   credit,
  //   creditstrong,
  //   dispatch,
  //   email,
  //   innovice,
  //   kikoff,
  //   lexis_nexis_freeze,
  //   photo_ID,
  //   proof_of_address,
  //   self,
  //   user_agreement_freeze,
  // ]);

  return (
    <a
      href="https://www.sagestreamllc.com/"
      target="_blank"
      onClick={() => setChecked(true)}
      rel="noreferrer"
      style={{
        textDecoration: "none",
      }}
    >
      <ListItem
        secondaryAction={
          <Checkbox onClick={saveData} edge="end" isChecked={checked} />
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemText primary="https://www.sagestreamllc.com/" />
        </ListItemButton>
      </ListItem>
    </a>
  );
};

export default Sagestreamilc;
