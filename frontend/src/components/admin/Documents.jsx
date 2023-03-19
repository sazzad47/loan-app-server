import React, { useEffect, useState } from "react";
import api from "../../state/api/api";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Navigation from "./Navigation";
import { BASE_URL } from "../../config";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const url = BASE_URL + "/user";
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setUsers(data);
        setFetchError(false);
      })
      .catch((err) => {
        setLoading(false);
        setFetchError(true);
        console.log(err);
      });
  }, []);

  const showModal = async (email) => {
    try {
      const docs = await api.get(`/docs/${email}`);
      //   const providers = await api.get(`/provider/${email}`);
      console.log("this is the docs", docs.data);
      //   console.log("this is the docs", providers);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <Navigation />
      </Box>
      <Box sx={{}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1050 }}>
            <TableHead sx={{ backgroundColor: "whitesmoke" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>City</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Zip Code</TableCell>
                <TableCell>SS Number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading && (
                <TableRow>
                  <TableCell colSpan={7}>Loading...</TableCell>
                </TableRow>
              )}
              {fetchError && (
                <TableRow>
                  <TableCell colSpan={7} sx={{ color: "red" }}>
                    Error! could not fetch users
                  </TableCell>
                </TableRow>
              )}
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell
                    onClick={() => showModal(user.email)}
                  >{`${user.first_name} ${user.last_name}`}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.city}</TableCell>
                  <TableCell>{user.state}</TableCell>
                  <TableCell>{user.zip_code}</TableCell>
                  <TableCell>{user.ss_number}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default UsersList;
