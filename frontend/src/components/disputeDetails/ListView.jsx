import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import React from "react";
import dispute_clock from "../../assets/dispute-clock.png";
import dispute_cross from "../../assets/dispute-cross.png";
import equifax from "../../assets/equifax.png";
import experian from "../../assets/experian.png";
import trans_union from "../../assets/trans_union.png";

const tableData = [
  {
    date: "01/07/2023",
    creditor: "Test",
    equifax: "In Dispute",
    experian: "In Dispute",
    trans_union: "",
  },
  {
    date: "01/07/2023",
    creditor: "Test",
    equifax: "In Dispute",
    experian: "In Dispute",
    trans_union: "In Dispute",
  },
  {
    date: "01/10/2023",
    creditor: "",
    equifax: "Negative",
    experian: "",
    trans_union: "Negative",
  },
  {
    date: "01/10/2023",
    creditor: "Capital Orange",
    equifax: "Negative",
    experian: "Negative",
    trans_union: "Negative",
  },
  {
    date: "01/10/2023",
    creditor: "Capital Orange",
    equifax: "",
    experian: "In Dispute",
    trans_union: "In Dispute",
  },
  {
    date: "01/10/2023",
    creditor: "Capital Orange",
    equifax: "Negative",
    experian: "Negative",
    trans_union: "",
  },
];

const ListView = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ background: theme.palette.grey[100], padding: "10px 10px" }}>
        <Typography
          color={theme.palette.grey[700]}
          variant="body1"
          sx={{
            fontSize: "1.5rem",
          }}
        >
          Other
        </Typography>
      </Box>
      <Box
        sx={{
          border: `1px solid ${theme.palette.grey[200]}`,
          marginTop: "1em",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Creditor/Furnisher</TableCell>
              <TableCell align="center">
                <img src={equifax} alt="equifax" />
              </TableCell>
              <TableCell align="center">
                <img src={experian} alt="experian" />
              </TableCell>
              <TableCell align="center">
                <img src={trans_union} alt="trans_union" />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((data, i) => (
              <TableRow key={i}>
                <TableCell align="center">{data.date}</TableCell>
                <TableCell align="center">{data.creditor}</TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {data.equifax && (
                      <img
                        height={15}
                        width={15}
                        src={
                          data.equifax === "Negative"
                            ? dispute_cross
                            : dispute_clock
                        }
                        alt={
                          data.equifax === "Negative"
                            ? "dispute_cross"
                            : "dispute_clock"
                        }
                      />
                    )}
                    <Typography variant="body2">{data.equifax}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {data.experian && (
                      <img
                        height={15}
                        width={15}
                        src={
                          data.experian === "Negative"
                            ? dispute_cross
                            : dispute_clock
                        }
                        alt={
                          data.experian === "Negative"
                            ? "dispute_cross"
                            : "dispute_clock"
                        }
                      />
                    )}
                    <Typography variant="body2">{data.experian}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {data.trans_union && (
                      <img
                        height={15}
                        width={15}
                        src={
                          data.trans_union === "Negative"
                            ? dispute_cross
                            : dispute_clock
                        }
                        alt={
                          data.trans_union === "Negative"
                            ? "dispute_cross"
                            : "dispute_clock"
                        }
                      />
                    )}
                    <Typography variant="body2">{data.trans_union}</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default ListView;
