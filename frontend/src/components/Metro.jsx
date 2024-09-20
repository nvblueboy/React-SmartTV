import CarouselSlide from './CarouselSlide.jsx';
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Metro.css";

export default function Metro() {

    var [data, setData] = useState({});



    useEffect(() => {
        console.log("Metro Effect");
        const makeAPICall = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/metro");
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

    // useEffect(() => makeAPICall);

    if (data.data != null) {
        return (
            <>
                <CarouselSlide>
                    <div className="metroSlide">
                        <div className="header">
                            LA Metro Departures
                        </div>
                        <div className="subheader">
                            Metro B Line from North Hollywood Station
                        </div>
                        
                        <div className="departures">
                            {data.data.predictionsData[0].destinations[0].predictions.map((prediction) => {
                                if (prediction.min == 1) {
                                    return (
                                        <div className="departure" key={prediction.tripId}>
                                            Departs in 1 minute
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="departure" key={prediction.tripId}>
                                            Departs in {prediction.min} minutes
                                        </div>
                                    )
                                }
                                
                            })}
                        </div>
                    </div>
                </CarouselSlide>
            </>
        )
    } else {
        return (
            <>
                <CarouselSlide>
                    <div className="metroSlide">
                        <div className="header">
                            LA Metro Departures
                        </div>
                        <div className="subheader">
                            Metro B Line from North Hollywood Station
                        </div>

                        <div className="departures">
                            Loading...
                        </div>
                    </div>
                </CarouselSlide>
            </>
        )
    }
}