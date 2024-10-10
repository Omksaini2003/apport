import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">CAM-11</span>
        <div className="card-avatar">
          {/* <img src={} alt="" /> */}
          <img src="https://via.placeholder.com/40" alt="Avatar" className="avatar-img" />
        </div>
      </div>
      <h2 className="card-title">Conduct Security Vulnerability Assessment</h2>
      <div className="card-tags">
        <div className="tag icon-tag">
          <span className="icon">!</span>
        </div>
        <div className="tag text-tag">Feature Request</div>
      </div>
    </div>
  );
};

export default Card;
