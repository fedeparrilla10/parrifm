import { Link } from "react-router";
import { randomTeamId } from "../utils/randomizeTeam";

const Home: React.FC = () => {
  return (
    <section className="home">
      <h1 className="home-title">Welcome to RecoFM Lite</h1>
      <p className="home-description">
        A lightweight recommendation system built with React and Vite.
      </p>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4">
        <Link to="/teams">
          <button>All Teams</button>
        </Link>
        <Link to={`/teams/${randomTeamId}`}>
          <button>Random Team</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
