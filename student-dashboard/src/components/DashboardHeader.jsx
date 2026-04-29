function DashboardHeader({ totalFavorites }) {
  return (
    <div className="header">
      <h1>Student Dashboard</h1>
      <p>Favorites: {totalFavorites}</p>
    </div>
  );
}

export default DashboardHeader;