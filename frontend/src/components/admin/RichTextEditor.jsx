import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { monthsLookup } from '../lookups/months';
import { Box, Button } from '@mui/material';

const RichTextEditor = props => {
    const { data, selectedUser, equifax, experian, transUnion, saveDispute, createLoading } = props;

    const [text, setText] = useState();
    const [equifaxLetter, setEquifaxLetter] = useState('');
    const [experianLetter, setExperianLetter] = useState('');
    const [transUnionLetter, setTransUnionLetter] = useState('');

    const [showLetter, setShowLetter] = useState('equifax');

    const runSaveDispute = () => {
        saveDispute({
            equifaxLetter,
            experianLetter,
            transUnionLetter
        });
    }

    useEffect(() => {
        let newString = '';
        for (let str of data.split(/\r?\n/)) {
            newString += '<p>' + str + '</p>';
        }

        // interpolate the string
        const values = {
            client_first_name: selectedUser.first_name,
            client_last_name: selectedUser.last_name,
            client_address: `${selectedUser.city}, ${selectedUser.zip_code}`,
            ss_number: selectedUser.ss_number,
            bdate: selectedUser.dob,
            client_signature: `
                <sapn style="font-style: italic;; font-weight: bold;">
                    ${selectedUser.first_name} ${selectedUser.last_name}
                </sapn>
            `,
            // bureau_address: `
            //     <div style="margin-top: 4px; margin-bottom: 4px">
            //         <p>Equifax Information Services LLC</p>
            //         <p>P.O Box 740256</p>
            //         <p>Atlanta, GA 30374-0258</p>
            //     </div>
            // `,
            curr_date: `
                <p style="margin-top: 3px; margin-bottom: 3px;">${new Date().getDate()} ${
                monthsLookup[new Date().getMonth()]
            }, ${new Date().getFullYear()}</p>
            `,
        };
        if (equifax) {
            // create a letter for equifax
            values['bureau_address'] = `
                <div style="margin-top: 4px; margin-bottom: 4px">
                    <p>Equifax Information Services LLC</p>
                    <p>P.O Box 740256</p>
                    <p>Atlanta, GA 30374-0258</p>
                </div>
            `;

            let letter = interpolateString(newString, values);
            setEquifaxLetter(letter);
        }

        if (experian) {
            values['bureau_address'] = `
                <div style="margin-top: 4px; margin-bottom: 4px">
                    <p>Experian</p>
                    <p>P.O Box 4500</p>
                    <p>Allen, TX 75013</p>
                </div>
            `;

            let letter = interpolateString(newString, values);
            setExperianLetter(letter);
        }

        if (transUnion) {
            values['bureau_address'] = `
                <div style="margin-top: 4px; margin-bottom: 4px">
                    <p>TransUnion LLC Consumer Dispute Letter</p>
                    <p>P.O Box 2000</p>
                    <p>Allen, TX 75013</p>
                </div>
            `;

            let letter = interpolateString(newString, values);
            setTransUnionLetter(letter);
        }

        // newString = interpolateString(newString, values);
        // setText(newString);
    }, [data]);

    return (
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
                <h1>Step 4:</h1> <h4> Generate letter</h4>
            </div>
            <Box sx={{ mb: 2 }}>
                <Button onClick={() => setShowLetter('equifax')}>
                    Equifax
                </Button>
                <Button onClick={() => setShowLetter('experian')}>
                    Experian
                </Button>
                <Button onClick={() => setShowLetter('transUnion')}>
                    Trans Union
                </Button>
            </Box>
            <>
                <Box>
                    {showLetter == 'equifax' && (
                        <div id="editor-contaner">
                            <div className="editor">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={equifaxLetter}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();

                                        setEquifaxLetter(data);
                                    }}
                                    config={{ UseBROnCarriageReturn: true }}
                                />
                            </div>
                        </div>
                    )}
                    {showLetter == 'experian' && (
                        <div id="editor-contaner">
                            <div className="editor">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={experianLetter}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();

                                        setExperianLetter(data);
                                    }}
                                    config={{ UseBROnCarriageReturn: true }}
                                />
                            </div>
                        </div>
                    )}
                    {showLetter == 'transUnion' && (
                        <div id="editor-contaner">
                            <div className="editor">
                                <CKEditor
                                    editor={ClassicEditor}
                                    data={transUnionLetter}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();

                                        setTransUnionLetter(data);
                                    }}
                                    config={{ UseBROnCarriageReturn: true }}
                                />
                            </div>
                        </div>
                    )}
                </Box>
            </>
            <Box sx={{ mt: 2 }}>
                <Button variant="contained" onClick={runSaveDispute} disabled={createLoading}>{createLoading ? 'Loading...' : 'Generate Letters'}</Button>
            </Box>
        </div>
    );
};

export default RichTextEditor;

function interpolateString(str, values) {
    for (let key in values) {
        str = str.replaceAll(`{${key}}`, values[key]);
    }

    return str;
}
