import { useNavigate } from "react-router";
import { randomizeTeamBySaveType } from "../utils/randomizeTeam";
import type { SaveType } from "../utils/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, TrendingUp, Brain, Star } from "lucide-react";

const SAVE_TYPES: Record<string, SaveType> = {
  long: "long_term",
  short: "short_term",
  mlb: "mlb",
  special: "special",
} as const;

const Selector: React.FC = () => {
  const { long, short, mlb, special } = SAVE_TYPES;
  const navigate = useNavigate();

  const randomizeTeamsBySaveType = (saveType: SaveType) => {
    const randomIndex = randomizeTeamBySaveType(saveType);
    navigate(`/teams/${saveType}/${randomIndex}`);
  };

  return (
    <section>
      <h2 className="text-center font-semibold">Truth Time</h2>
      <p className="text-center">
        Choose your preferred save type to get a random team recommendation.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <Button
          onClick={() => randomizeTeamsBySaveType(short)}
          className="flex items-center gap-2"
        >
          <Clock className="h-4 w-4" />
          Short Game
        </Button>
        <Button
          onClick={() => randomizeTeamsBySaveType(long)}
          className="flex items-center gap-2"
        >
          <TrendingUp className="h-4 w-4" />
          Long Game
        </Button>
        <Button
          onClick={() => randomizeTeamsBySaveType(mlb)}
          className="flex items-center gap-2"
        >
          <Brain className="h-4 w-4" />
          LLM Game
        </Button>
        <Button
          onClick={() => randomizeTeamsBySaveType(special)}
          className="flex items-center gap-2"
        >
          <Star className="h-4 w-4" />
          Special Game
        </Button>
      </div>

      <div className="mt-4 flex justify-center">
        <Button variant="outline" size="sm" onClick={() => navigate("/")}>
          <ArrowLeft className="mr-0.5 mt-0.5" />
          Back
        </Button>
      </div>
    </section>
  );
};

export default Selector;
