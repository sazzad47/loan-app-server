import React, {useEffect, useState} from "react";
import { TextField, Autocomplete } from "@mui/material";

const UsersSelect = ({value, setSelectedUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:5000/user';
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
            })
            .catch(err => {
                // alert('Error: Could not fetch list of users');
                console.log(err);
            })
    }, []);

    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={users}
                getOptionLabel={(option) => option['email']}
                size="small"
                renderOption={(props, option) => (
                    <li {...props} key={option.id}>{option.email}</li>
                )}
                sx={{ width: 300, mb: 2 }}
                renderInput={(params) => <TextField {...params} label="Users" />}
                value={value}
                onChange={(e, newValue) => {
                    setSelectedUser(newValue);
                }}
          />
        </div>
    );
}

export default UsersSelect;