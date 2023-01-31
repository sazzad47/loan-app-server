import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import React, { useState } from "react";

const Account1 = ({ link }) => {
  const [checked, setChecked] = useState(false);

  const onChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <a
      href={`${link}`}
      target="_blank"
      onClick={() => setChecked(true)}
      rel="noreferrer"
      style={{
        textDecoration: "none",
      }}
    >
      <ListItem
        secondaryAction={
          <Checkbox checked={checked} onChange={onChange} edge="end" />
        }
        disablePadding
      >
        <ListItemButton>
          <ListItemText primary={`${link.slice(0, 60)}`} />
        </ListItemButton>
      </ListItem>
    </a>
  );
};

export default Account1;
