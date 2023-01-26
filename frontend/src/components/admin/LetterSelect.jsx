import React, { useState, useEffect } from 'react';
import { csv } from '../../letters-data';
import Papa from 'papaparse';
import { Autocomplete, Box, Button, TextField } from '@mui/material';

const LetterSelect = ({ value, setSelectedLetter }) => {
    const [templates, setTemplates] = React.useState([]);

    useEffect(() => {
        Papa.parse(csv, {
            header: true,
            complete: function (results) {
                setTemplates(results.data);
            },
        });
    }, []);

    return (
        <>
            <div
                style={{
                    marginTop: '20px',
                    padding: '20px',
                    border: '1px solid black',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        // flexDirection: "column",
                        alignItems: 'center',
                    }}
                >
                    <h1>Step 3:</h1> <h4> Choose Choose letter</h4>
                </div>
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={templates}
                    getOptionLabel={option => option['Category Name']}
                    renderOption={(props, option) =>
                        React.Children.toArray(
                            <li {...props}>{option['Category Name']}</li>
                        )
                    }
                    sx={{ width: 300, mb: 2 }}
                    renderInput={params => (
                        <TextField {...params} label="Letters" />
                    )}
                    size={'small'}
                    value={value}
                    onChange={(e, newValue) => {
                        setSelectedLetter(newValue);
                    }}
                />
                <Box>
                    <Button variant="contained" color="primary">
                        Next
                    </Button>
                </Box>
            </div>
        </>
    );
};

export default LetterSelect;
