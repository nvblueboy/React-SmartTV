import CarouselSlide from './CarouselSlide.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';

function convertData (input){
    return input;
}

export default function Weather() {
    var [data, setData] = useState({});

    useEffect(() => {

        console.log("Weather Effect");
        const makeAPICall = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/weather");
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        
        const interval = setInterval(makeAPICall, 20000);
        

        //Clearing the interval
        return () => {clearInterval(interval);};
    }, [data]);

    return (
        <>
            <CarouselSlide>
                Weather information
            </CarouselSlide>
        </>
    )
}