import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Papa from 'papaparse';
import { csv } from '../../letters-data';

const RichTextEditor = ({ data }) => {
    const [text, setText] = useState();

    useEffect(() => {
        let newString = '';
        for(let str of data.split(/\r?\n/)) {
            newString += "<p>" + str + "</p>";
        }
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
