import React from 'react';
import { TextField } from '@mui/material';

function TextFieldSimple(props) {
    const { label = "label", name, value = "", onChange, id = "input", required = false,autoFocus = false } = props;

    return (
        <TextField
            variant="outlined"
            margin="normal"
            required={required}
            fullWidth
            height="1.4375em"
            width="100%"
            id={id}
            label={label}
            name={name}
            autoFocus={autoFocus}
            value={value}
            sx={{
                 borderRadius: '10px', // Add border radius here
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderRadius: '10px', // Border radius for the input field
                    },
                },
                '& .MuiOutlinedInput-input': {
                    '&:-webkit-autofill': {
                        WebkitBoxShadow: '0 0 0 100px #E9E5E2 inset',
                        WebkitTextFillColor: 'default',
                        borderRadius: '10px', // Add border radius here
                    },
                },
            }}
            onChange={onChange}
        />
    );
}

export default TextFieldSimple;
