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
    <section className="flex flex-col items-center justify-center gap-1">
      <div className="flex items-center justify-center">
        <img src={team?.logo} alt={`${team?.name} logo`} className="w-1/2" />
        {/* <img
          src={team?.stadium.image}
          alt={`${team?.stadium.name} stadium`}
          className="team-stadium w-1/2"
        /> */}
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">{team?.name}</h1>
        <h3>{team?.league}</h3>
        <h4>{team?.country}</h4>
        <p className="team-description">{team?.reason}</p>
      </div>

      <p>{team?.difficulty}</p>

      <div className="flex gap-4 mt-8">
        <Link to="/">
          <button>Back</button>
        </Link>
        <button onClick={handleRandomize}>Random Team</button>
      </div>
    </section>
  );
};

export default Team;
