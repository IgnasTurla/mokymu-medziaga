const LyginisArNe = () => {

    // let tikrinimas = (event) => {
    //    let skaicius = event.target.value;

    //    if (skaicius % 2 === 0) {
    //     console.log('skaicius yra lyginis')
    //    } else {
    //     console.log('skaicius nelyginis!!!!!')
    //    }

    // }
  

    let tikrinimas = (event) => {
        let skaicius = event.target.value;
       
        skaicius % 2 === 0 ? console.log('Skaicius yra lyginis') : console.log('Skaicius yra nelyginis!!!!!');
    } 

    return(
        <div>
            <h2>Lyginis ar nelyginis?</h2>
            <input type="number" onInput={tikrinimas}/>
        </div>
    )
};

export default LyginisArNe;