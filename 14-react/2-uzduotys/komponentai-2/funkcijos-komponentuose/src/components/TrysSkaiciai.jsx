const TrysSkaiciai = () => {
     let skaitmenys = [112, 55, 12];

     const isvesti = () => {
        return skaitmenys.join(', ')
     }

     const didziausiasSkaicius = (mas) => {
        return Math.max (...mas)
     }

     const skaiciuSuma = (mas) => {
        return mas.reduce((suma, skaicius) => suma + skaicius, 0)
     }
       

     return (
        <div>
            <p>{isvesti(skaitmenys)}</p>
            <p>masyvo {isvesti(skaitmenys)} didziausias skaicius yra: {didziausiasSkaicius(skaitmenys)}</p>
            <p>masyvo {isvesti(skaitmenys)} suma yra: {skaiciuSuma(skaitmenys)}</p>
        </div>
     )
}

export default TrysSkaiciai;