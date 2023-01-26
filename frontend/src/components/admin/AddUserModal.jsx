import React from 'react';
import { Modal, Box, Typography, Grid, TextField, Button } from '@mui/material';
import * as yup from 'yup';
import { FormikProvider, useFormik } from 'formik';

const initialValues = {
    email: '',
    password: '',
    password2: '',
    first_name: '',
    last_name: '',
    state: '',
    zip_code: '',
    city: '',
    phone: '',
};

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email')
        .required('This field is required!'),
    first_name: yup.string().required('This field is required!'),
    last_name: yup.string().required('This field is required!'),
    state: yup.string().required('This field is required!'),
    zip_code: yup.string().required('This field is required!'),
    city: yup.string().required('This field is required!'),
    phone: yup.string().required('This field is required!'),
    password: yup.string().required('This field is required!'),
    password2: yup.string().when('password', {
        is: val => (val && val.length > 0 ? true : false),
        then: yup
            .string()
            .oneOf([yup.ref('password')], 'Both password need to be the same'),
    }),
});

const AddUserModal = ({ open, handleClose }) => {
    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit(values) {
            console.log(values);
        },
    });
    const { getFieldProps, touched, errors, handleSubmit } = formik;

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    Add a new user
                </Typography>
                <FormikProvider value={formik}>
                    <Box component="form" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                    fullWidth
                                    id="first_name"
                                    label="First name"
                                    autoComplete="first_name"
                                    variant="filled"
                                    size="small"
                                    {...getFieldProps('first_name')}
                                    error={
                                        !!!!touched.first_name &&
                                        !!errors.first_name
                                    }
                                    helperText={
                                        touched.first_name && errors.first_name
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                    fullWidth
                                    id="last_name"
                                    label="Last name"
                                    autoComplete="last_name"
                                    variant="filled"
                                    size="small"
                                    {...getFieldProps('last_name')}
                                    error={
                                        !!!!touched.last_name &&
                                        !!errors.last_name
                                    }
                                    helperText={
                                        touched.last_name && errors.last_name
                                    }
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    variant="filled"
                                    size="small"
                                    {...getFieldProps('email')}
                                    error={!!!!touched.email && !!errors.email}
                                    helperText={touched.email && errors.email}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sx={{ display: 'flex', gap: '10px' }}
                            >
                                <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    autoComplete="city"
                                    variant="filled"
                                    size="small"
                                    {...getFieldProps('city')}
                                    error={!!!!touched.city && !!errors.city}
                                    helperText={touched.city && errors.city}
                                />
                                <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                    fullWidth
                                    id="state"
                                    label="State"
                                    variant="filled"
                                    size="small"
                                    {...getFieldProps('state')}
                                    error={!!!!touched.state && !!errors.state}
                                    helperText={touched.state && errors.state}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sx={{ display: 'flex', gap: '10px' }}
                            >
                                <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                    fullWidth
                                    id="zip_code"
                                    label="Zip Code"
                                    variant="filled"
                                    size="small"
                                    {...getFieldProps('zip_code')}
                                    error={
                                        !!!!touched.zip_code &&
                                        !!errors.zip_code
                                    }
                                    helperText={
                                        touched.zip_code && errors.zip_code
                                    }
                                />
                                <TextField
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                    fullWidth
                                    id="phone"
                                    label="Phone"
                                    variant="filled"
                                    size="small"
                                    {...getFieldProps('phone')}
                                    error={!!!!touched.phone && !!errors.phone}
                                    helperText={touched.phone && errors.phone}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </FormikProvider>
            </Box>
        </Modal>
    );
};

export default AddUserModal;
