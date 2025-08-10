import { useParams, useNavigate, Link } from "react-router";
import { teamRecommendations } from "../utils/teamRecommendations";
import { randomizeTeam } from "../utils/randomizeTeam";

const Team: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const team = teamRecommendations.find((team) => team.id === Number(id));

  const handleRandomize = () => {
    const randomIndex = randomizeTeam();
    navigate(`/teams/${randomIndex}`);
  };

  return (
    <section className="team">
      <h1 className="team-title">{team?.name}</h1>
      <h3>{team?.league}</h3>
      <h4>{team?.country}</h4>
      <p className="team-description">{team?.reason}</p>

      <Link to="/">
        <button>Back</button>
      </Link>
      <button onClick={handleRandomize}>Random Team</button>
    </section>
  );
};

export default Team;
