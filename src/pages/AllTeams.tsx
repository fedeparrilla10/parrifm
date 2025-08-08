import { teamRecommendations } from "../utils/teamRecommendations";
import { Link } from "react-router";

const AllTeams: React.FC = () => {
  return (
    <section>
      <h2>All Teams</h2>
      <ul>
        {teamRecommendations.map((team) => (
          <li key={team.name}>
            <h3>{team.name}</h3>
            <p>League: {team.league}</p>
            <p>Country: {team.country}</p>
            <p>Reason: {team.reason}</p>
            <Link to={`/teams/${team.id}`}>
              <button>View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllTeams;
