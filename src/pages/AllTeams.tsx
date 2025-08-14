import { teamRecommendations } from "../utils/teamRecommendations";
import { Link } from "react-router";

const AllTeams: React.FC = () => {
  return (
    <section className="max-w-2xl mx-auto py-8">
      <h2 className="text-xl font-bold mb-6 text-center">All Teams</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teamRecommendations.map((team) => (
          <li key={team.id} className="flex items-center gap-4 rounded p-3">
            <img
              src={team.logo}
              alt={`${team.name} logo`}
              className="w-12 h-12 object-contain rounded"
            />
            <div className="flex flex-col flex-1">
              <span className="font-semibold text-lg">{team.name}</span>
              {/* <span className="text-sm text-gray-500">
                Difficulty: {team.difficulty}
              </span> */}
            </div>
            <Link to={`/teams/${team.id}`}>
              <button className="text-xs px-2 py-1 bg-blue-500 text-white rounded">
                View
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AllTeams;