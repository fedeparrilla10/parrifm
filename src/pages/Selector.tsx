import { useNavigate } from "react-router";
import { randomizeTeamBySaveType } from "../utils/randomizeTeam";
import type { SaveType } from "../utils/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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
    <section className="selector">
      <div className="flex flex-col md:flex-row gap-4">
        <Button onClick={() => randomizeTeamsBySaveType(short)}>
          Short Game
        </Button>
        <Button onClick={() => randomizeTeamsBySaveType(long)}>
          Long Game
        </Button>
        <Button onClick={() => randomizeTeamsBySaveType(mlb)}>LLM Game</Button>
        <Button onClick={() => randomizeTeamsBySaveType(special)}>
          Special Game
        </Button>
      </div>

      <div className="mt-4">
        <Button variant="outline" size="sm" onClick={() => navigate("/")}>
          <ArrowLeft className="mr-0.5 mt-0.5" />
          Back
        </Button>
      </div>
    </section>
  );
};

export default Selector;
