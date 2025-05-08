import useWindowSize from "../hooks/useWindowSize";

const Komp2 = () => {
    const displaySize = useWindowSize();

    const deviceName = () => {
        if (window.innerWidth <= 600){
            return('Mobile')
          } else if (window.innerWidth <= 1200){
            return('Tablet')
          } else {
            return('Dekstop')
          }
    };

    // const deviceName = () =>
    //     window.innerWidth <= 600 ? 'Mobilus' :
    //     window.innerWidth <= 1200 ? 'Tablet' : 'Dekstop';



    return(
        <div>
          <h3>Ekrano dydzio pvz</h3>
          <p>
            height: {displaySize.height} px
       
          </p>
          <p>
          width: {displaySize.width} px
          </p>
          <p>
            Device used: {deviceName()}
          </p>
        </div>
    )
};

export default Komp2;