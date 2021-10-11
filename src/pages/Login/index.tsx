import React from 'react'
import Button from 'devextreme-react/button';
import ScrollView from 'devextreme-react/scroll-view';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextArea from 'devextreme-react/text-area';
import TextField from '@mui/material/TextField';

export const Login = (props) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    console.log('login', props);

    return (
        <div>
            <ScrollView>

                DevExtreme
                <Button
                    text="Click me"
                />
                <TextArea
                />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </ScrollView>
        </div>
    )
}
