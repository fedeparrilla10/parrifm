import { Link, useNavigate } from "react-router";
import { randomizeTeam } from "../utils/randomizeTeam";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleRandomTeam = () => {
    const randomIndex = randomizeTeam();
    navigate(`/teams/${randomIndex}`);
  };

  return (
    <section>
      <h1>Welcome to ParriFM</h1>
      <p>A lightweight recommendation system built for Football Manager.</p>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4">
        <Link to="/selector">
          <button>Selector</button>
        </Link>
        <Link to="/teams">
          <button>All Teams</button>
        </Link>
        <button onClick={handleRandomTeam}>Random Team</button>
      </div>
    </section>
  );
};

export default Home;
