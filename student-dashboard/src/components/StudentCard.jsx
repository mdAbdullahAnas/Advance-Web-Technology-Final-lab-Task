import PropTypes from "prop-types";

function StudentCard({ name, id, avatar, gpa, major }) {
  return (
    <div className="card">
      <img src={avatar} alt={name} width="100" />
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Major: {major}</p>
      <p>GPA: {gpa}</p>
    </div>
  );
}

StudentCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  avatar: PropTypes.string,
  gpa: PropTypes.number,
  major: PropTypes.string,
};

export default StudentCard;