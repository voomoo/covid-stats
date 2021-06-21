const DataInfoCard = ({ icon, title, value }) => {
  return (
    <div className="data-info-card">
      <img src={icon} alt="" />
      <div className="card-info">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        <div className="card-value">
          <h5>{value}</h5>
        </div>
      </div>
    </div>
  );
};

export default DataInfoCard;
