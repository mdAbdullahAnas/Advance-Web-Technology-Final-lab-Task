function StatBadge({ label, value }) {
  return (
    <div>
      <strong>{label}:</strong> {value}
    </div>
  );
}

export default StatBadge;