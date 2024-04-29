//Crear carpetas pora los hooks
//Se deben crear con el prefijo use en js por que regresa informacion
import { useRef, useEffect, useState } from "react";
import eventsJSON from "../data/events.json";

const useEventsData = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        setTimeout(() => {
            try {
                setData(eventsJSON);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        }, 4000)
    }, []);
    return {
        events: data?._embedded?.events || [],
        isLoading,
        error,
    };
};

export default useEventsData


// const useEventsData = () => {
//     const data = useRef(eventsJSON);
//     const { _embedded: { events } } = data.current;
//     return { events };
// };


