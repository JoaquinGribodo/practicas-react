import "../ReadDate/ReadDate.css";

const ReadDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("es-AR", { month: "long" });
  const day = date.toLocaleString("es-AR", { day: "2-digit" });

  return (
    <div className="dateStyle">
      <div className="style">{year}</div>
      <div className="style">{month}</div>
      <div className="style">{day}</div>
    </div>
  );
};

export default ReadDate;
