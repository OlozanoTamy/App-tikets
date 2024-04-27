import EventItem from "./components";
import eventsJson from "../../data/events.json";
import { useState } from "react";

const Events = ({ searchTerm }) => {
  const [data] = useState(eventsJson);
  const {
    _embedded: { events },
  } = data;

  const handleEventItemClick = (id) => {
    console.log("Boton Clickeado: ", id);
  };

  const renderEvent = () => {
    let eventsFiltered = events;
    //este if me permite evaluar si searchterm existe y asignarlo a eventsfilterde para que pueda ser mapiado
    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter((event) =>
        event.name.toLowerCase().includes(searchTerm)
      );
    }
    return eventsFiltered.map((evento) => (
      <EventItem
        key={`event-item-${evento.id}`}
        name={evento.name}
        images={evento.images[0].url}
        info={evento.info}
        onEventClick={handleEventItemClick}
        id={evento.id}
      />
    ));
  };

  return (
    <div>
      Eventos
      {renderEvent()}
    </div>
  );
};

export default Events;
