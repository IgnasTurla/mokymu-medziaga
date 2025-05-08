import './SassStyling.css'

const SassStyling = () => {

    return (
        <div id='sass-component'>
            <h2>Sass styling</h2>
            <div id='sass-container'>
                 <h4>Mano sass bandymas</h4>
                 <p className='sassLoremText'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, a.</p>
                 <button className='btn-click'>Click me</button>
            </div>

            <div className='sass-links'>
                <ul>
                    <li><a>pvz</a></li>
                    <li></li>
                </ul>
                 </div>
        </div>
    )
};

export default SassStyling;