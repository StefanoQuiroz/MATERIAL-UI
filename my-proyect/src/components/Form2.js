import React from 'react';
import { makeStyles, FormControl, InputLabel, NativeSelect, Input, Button} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(3),
    },
    button: {
        marginTop: theme.spacing(3)
    }
  }));

const Form2 = () => {
    const classes = useStyles();
    return (
        <form>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="search"></InputLabel>
                <NativeSelect id="select" name="colocar la propiedad del useState">
                    <option value="apple">apple</option>
                    <option value="strawberry">strawberry</option>
                    <option value="peach">peach</option>
                    <option value="orange">orange</option>
                    <option value="waterMellow">water-mellow</option>
                </NativeSelect>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="id">Id </InputLabel>
                <Input id="id" type="number" name="colocar la propiedad del useState"/>
            </FormControl>
            <Button type="submit" variant="contained" color="default" className={classes.button} endIcon={<SendIcon/>}>Send</Button>
        </form>

    );
}

export default Form2;

