import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const InputForm = (props) => {
    const { onSubmit } = props;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [inputValue, setInputValue] = React.useState(''); 

    const handelChange = (event) => {
        setInputValue(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (onSubmit) {
            onSubmit(inputValue)
            setInputValue('')
        }
    }

    return (
        <form className="App-header__form" onSubmit={handleSubmit}>
            <TextField fullWidth required={true} id="outlined-required" value={inputValue} onChange={handelChange} label="Сообщение" variant="outlined" />
            <Button type="submit" variant="contained" color="primary">Отправить</Button>
        </form>
    )
}

export default InputForm;