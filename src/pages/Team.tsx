import { useParams, useNavigate } from "react-router";
import Flag from "react-flagpack";
import "react-flagpack/dist/style.css";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, RefreshCw } from "lucide-react";
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

  if (!team) {
    return;
  }

  return (
    <section className="h-96 flex flex-col items-center justify-center gap-1">
      <div className="flex items-center justify-center h-24 w-24">
        {team?.logo ? (
          <img
            src={team.logo}
            alt={`${team.name} logo`}
            className="h-full w-full object-contain"
          />
        ) : (
          <Shield className="h-24 w-24 text-muted-foreground" />
        )}
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl">{team?.name}</h1>
        <div className="flex items-center gap-2">
          <Flag code={team?.country} size="m" hasDropShadow hasBorderRadius />
          {team?.league}{" "}
        </div>
        <p className="mt-4">{team?.reason}</p>
        {team?.challenges && (
          <div className="mt-4">
            <ul className="list-disc list-inside">
              {team.challenges.map((challenge) => (
                <li key={challenge.id}>{challenge.objective}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex gap-4 mt-8">
        {saveType && (
          <>
            <Button variant="outline" onClick={() => navigate("/selector")}>
              <ArrowLeft className="mr-0.5 mt-0.5" />
              Back
            </Button>
            <Button
              variant="outline"
              onClick={() => randomizeTeamsBySaveType(saveType as SaveType)}
            >
              <RefreshCw className="mr-0.5 mt-0.5" />
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
            <Button variant="outline" onClick={randomizeAllTeams}>
              <RefreshCw className="mr-0.5 mt-0.5" />
              Randomize another team
            </Button>
          </>
        )}
      </div>
    </section>
  );
};

export default Team;
