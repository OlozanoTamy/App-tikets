import styles from "./EventItem.module.css";
const EventItem = ({ name, info, images, onEventClick, id }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation();
    onEventClick(id);
  };
  return (
    <div className={styles.eventItemContainer}>
      <br />
      <img src={images} alt="event" height={300} width={400} />
      <div className={styles.eventInfoContainer}>
        <h3 className={styles.eventName}>{name}</h3>
        <p className={styles.eventInfo}>{info}</p>
        <button className={styles.seeMoreButton} onClick={handleSeeMoreClick}>
          Ver mas
        </button>
        <br />
      </div>
    </div>
  );
};

export default EventItem;
