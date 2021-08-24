import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const InputForm = (props) => {
    const { onSubmit, label = 'Сообщение', placeholder = 'Введите сообщение'  } = props;

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
            <TextField fullWidth required id="outlined-required" value={inputValue} onChange={handelChange} label={label} variant="outlined" placeholder={placeholder} />
            <Button type="submit" variant="contained" color="primary">Отправить</Button>
        </form>
    )
}

export default InputForm;