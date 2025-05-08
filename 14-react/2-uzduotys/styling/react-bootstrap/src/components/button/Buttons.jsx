import Button from 'react-bootstrap/Button';

const Buttons = ({ buttonText, index }) => {

    return(
        <div>
            <Button variant={index === 0 ? 'white' : 'primary'}>{buttonText}</Button>
        </div>
    )
};

export default Buttons;