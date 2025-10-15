import { Link, useNavigate } from "react-router";
import { randomizeTeam } from "../utils/randomizeTeam";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal, Grid3x3, Shuffle } from "lucide-react";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleRandomTeam = () => {
    const randomIndex = randomizeTeam();
    navigate(`/teams/${randomIndex}`);
  };

  return (
    <section>
      <h2 className="text-center font-semibold">Welcome to ParriFM</h2>
      <p className="text-center">
        A lightweight recommendation system built for Football Manager.
      </p>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-4">
        <Link to="/selector">
          <Button className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Selector
          </Button>
        </Link>
        <Link to="/teams">
          <Button className="flex items-center gap-2">
            <Grid3x3 className="h-4 w-4" />
            All Teams
          </Button>
        </Link>
        <Button onClick={handleRandomTeam} className="flex items-center gap-2">
          <Shuffle className="h-4 w-4" />
          Random Team
        </Button>
      </div>
    </section>
  );
};

export default Home;
