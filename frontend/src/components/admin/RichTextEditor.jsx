import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Papa from 'papaparse';
import { csv } from '../../letters-data';
import { monthsLookup } from '../lookups/months';

const RichTextEditor = ({ data, selectedUser }) => {
    const [text, setText] = useState();

    useEffect(() => {
        let newString = '';
        for(let str of data.split(/\r?\n/)) {
            newString += "<p>" + str + "</p>";
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
            bureau_address: `
                <div style="margin-top: 4px; margin-bottom: 4px">
                    <p>Equifax Information Services LLC</p>
                    <p>P.O Box 740256</p>
                    <p>Atlanta, GA 30374-0258</p>
                </div>
            `,
            curr_date: `
                <p style="margin-top: 3px; margin-bottom: 3px;">${new Date().getDate()} ${monthsLookup[new Date().getMonth()]}, ${new Date().getFullYear()}</p>
            `
        }
        
        console.log('Selected', values);
        newString =  interpolateString(newString, values);
        setText(newString);
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
            <div id="editor-contaner">
                <div className="editor">
                    <CKEditor
                        editor={ClassicEditor}
                        data={text}
                        onChange={(event, editor) => {
                            const data = editor.getData();

                            setText(data);
                        }}
                        config={{ UseBROnCarriageReturn: true }}
                    />
                </div>
            </div>
        </div>
    );
};

export default RichTextEditor;

function interpolateString(str, values) {
    for(let key in values) {
        str = str.replaceAll(`{${key}}`, values[key]);
    }

    return str;
}
