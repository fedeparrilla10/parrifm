import { useParams } from "react-router";
import { teamRecommendations } from "../utils/teamRecommendations";

const Team: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const team = teamRecommendations.find((team) => team.id === Number(id));

  return (
    <section className="team">
      <h1 className="team-title">Team Details</h1>
      <p className="team-description">
        Here you can find more information about the selected team.
        {team?.name}
      </p>
    </section>
  );
};

export default Team;
