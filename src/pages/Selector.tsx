import { useNavigate } from "react-router";
import { randomizeTeamBySaveType } from "../utils/randomizeTeam";
import type { SaveType } from "../utils/types";

const SAVE_TYPES: Record<string, SaveType> = {
  long: "long_term",
  short: "short_term",
  mlb: "mlb",
  special: "special",
} as const;

const Selector: React.FC = () => {
  const { long, short, mlb, special } = SAVE_TYPES;
  const navigate = useNavigate();

  const handleRandomize = (saveType: SaveType) => {
    const randomIndex = randomizeTeamBySaveType(saveType);
    navigate(`/teams/${randomIndex}`);
  };

  return (
    <section className="selector">
      <div style={{ display: "flex", gap: "1rem" }}>
        <button onClick={() => handleRandomize(long)}>Long Game</button>
        <button onClick={() => handleRandomize(short)}>Short Game</button>
        <button onClick={() => handleRandomize(mlb)}>MLB</button>
        <button onClick={() => handleRandomize(special)}>Special Game</button>
      </div>
    </section>
  );
};

export default Selector;
