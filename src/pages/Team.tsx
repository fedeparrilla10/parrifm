import { useParams, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { teamRecommendations } from "../utils/teamRecommendations";
import { randomizeTeam, randomizeTeamBySaveType } from "../utils/randomizeTeam";
import { type SaveType } from "../utils/types";

const Team: React.FC = () => {
  const navigate = useNavigate();
  const { id, saveType } = useParams<{ id: string; saveType?: string }>();
  const team = teamRecommendations.find((team) => team.id === Number(id));

  const randomizeTeamsBySaveType = (saveType: SaveType) => {
    const randomIndex = randomizeTeamBySaveType(saveType);
    navigate(`/teams/${saveType}/${randomIndex}`);
  };

  const randomizeAllTeams = (): void => {
    const randomIndex = randomizeTeam();
    navigate(`/teams/${randomIndex}`);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-1">
      <div className="flex items-center justify-center">
        <img src={team?.logo} alt={`${team?.name} logo`} className="w-1/2" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl">{team?.name}</h1>
        <h3>{team?.league}</h3>
        <h4>{team?.country}</h4>
        <p className="team-description">{team?.reason}</p>
      </div>

      <p>{team?.difficulty}</p>

      <div className="flex gap-4 mt-8">
        {saveType && (
          <>
            <Button onClick={() => navigate("/selector")}>Back</Button>
            <Button
              onClick={() => randomizeTeamsBySaveType(saveType as SaveType)}
            >
              Show me another team
            </Button>
          </>
        )}
        {!saveType && (
          <>
            <Button variant="outline" onClick={() => navigate("/")}>
              <ArrowLeft className="mr-0.5 mt-0.5" />
              Back
            </Button>
            <Button onClick={randomizeAllTeams}>Randomize another team</Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Team;
