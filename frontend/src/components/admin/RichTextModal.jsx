import React from 'react';
import { Modal, Box, Typography, Grid, Button } from '@mui/material';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useEffect } from 'react';
import { useState } from 'react';

const modalStyle = {
    // position: 'absolute',
    // top: '50%',
    // left: '50%',
    // transform: 'translate(-50%, -50%)',
    // width: 900,
    // bgcolor: 'background.paper',
    // borderRadius: 2,
    // boxShadow: 24,
    // p: 4,
    // height: 'auto',
    // overflow:'scroll',
    position:'absolute',
    top:'50%',
    left:'50%',
    transform: 'translate(-50%, -50%)',
    overflow:'scroll',
    height:'100%',
    display:'block',
    width: 1050,
};

const RichTextModal = ({ open, handleClose, content }) => {
    const [data, setData] = useState('');

    useEffect(() => {
        setData(content);
    }, [content]);
    console.log(content);
    return (
        <Modal open={open} onClose={handleClose} const>
            <Box sx={modalStyle}>
                <div id="editor-contaner">
                    <div className="editor">
                        <CKEditor
                            editor={ClassicEditor}
                            data={data}
                            onChange={(event, editor) => {
                                const data = editor.getData();

                                setData(data);
                            }}
                            isReadOnly={true}
                        />
                    </div>
                </div>
            </Box>
        </Modal>
    );
};

export default RichTextModal;
