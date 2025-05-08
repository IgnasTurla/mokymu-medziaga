const ZodzioIlgis = () => {
    let vieta = 'Palanga';
    const ilgis = (vieta) => {
        return vieta.length
    }

    return (
        <div>
            <p>{vieta}</p>
            <p>{'Palanga zodzio ilgis: ' + ilgis(vieta)}</p>
        </div>
    )
}

export default ZodzioIlgis;