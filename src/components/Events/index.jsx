import EventItem from "./components";
import useEventsData from "../../hooks/useEventsData";

const Events = ({ searchTerm }) => {
  //Se instancia el objeto event  apartir del hook creado
  const { events, isLoading, error } = useEventsData();
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

    if (error) {
      return <>Ha ocurrido un Error</>;
    }

    if (isLoading) {
      return <div>Cargando Resultados....</div>;
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
