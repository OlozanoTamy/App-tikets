const EventItem = ({ name, info, images, onEventClick, id }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };
  return (
    <>
      <br />
      <img src={images} alt="event" height={300} width={400} />
      <h3>{name}</h3>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Ver mas</button>
      <br />
    </>
  );
};

export default EventItem;
