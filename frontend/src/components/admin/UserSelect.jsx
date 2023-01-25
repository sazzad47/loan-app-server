import React, { useEffect, useState } from 'react';
import { TextField, Autocomplete, Button, Stack } from '@mui/material';

const UsersSelect = ({ value, setSelectedUser }) => {
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
            });
    }, []);

    return (
        <div>
            <Stack direction={'row'} alignItems='center' spacing={2}>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={users}
                    getOptionLabel={option => option['email']}
                    size="small"
                    renderOption={(props, option) => (
                        <li {...props} key={option.id}>
                            {option.email}
                        </li>
                    )}
                    sx={{ width: 300, mb: 2, marginTop: '12px'}}
                    renderInput={params => (
                        <TextField {...params} label="Users" />
                    )}
                    value={value}
                    onChange={(e, newValue) => {
                        setSelectedUser(newValue);
                    }}
                />
                <Button variant="contained" color="primary"> Add User</Button>
            </Stack>
        </div>
    );
};

export default UsersSelect;
