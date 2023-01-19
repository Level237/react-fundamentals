import   {useState,useRef} from 'react';
import WeatherWidget from './WeatherWidgetClass';
function WeatherApp(){
    const [location,setLocation]=useState('');
    const locationInput=useRef(null);

    function handleClick(e){
        e.preventDefault();
        
        setLocation(locationInput.current.value);
    }
    return(
        <div className='container'>
            <div className='row justify-content-md-center'>
                <div style={{ width:`20rem` }}>
                    <form className='row g-3'>
                        <div className='col-auto'>
                            <input
                            type='text'
                            className='form-control'
                            ref={LocationInput}
                            />
                        </div>
                        <div className='col-auto'>
                            <button
                            className='btn btn-primary'
                            onClick={handleClick}
                            >
                                Get
                            </button>
                        </div>
                    </form>
                    <WeatherWidget  />
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;