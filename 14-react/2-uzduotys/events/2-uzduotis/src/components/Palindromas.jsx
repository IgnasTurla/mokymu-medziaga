const Palindromas = () => {
     
    const apsuktasPolindromas = (text) => {
        const apsuktasText = text.split('').reverse().join('');
        return text === apsuktasText;
    }

    const tikrintiPalindroma = (event) => {
        const inputValue = event.target.value;

        if (apsuktasPolindromas(inputValue)) {
            console.log(`${inputValue} yra Palindromas`)
        } else {
            console.log(`${inputValue} nera Palindromas !!!`)
        }
    }


    return (
        <div>
            <h2>Palindromas</h2>
            <input type="text" onChange={tikrintiPalindroma}/>
        </div>
    )
};

export default Palindromas;