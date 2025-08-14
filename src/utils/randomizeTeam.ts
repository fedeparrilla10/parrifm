import { type SaveType } from "./types";
import { teamRecommendations } from "./teamRecommendations";

export const randomizeTeam = (): number => {
  return Math.floor(Math.random() * teamRecommendations.length) + 1;
};

export const randomizeTeamBySaveType = (saveType: SaveType): number | null => {
  const filteredTeams = teamRecommendations.filter((team) =>
    team.save_type.includes(saveType)
  );

  const randomIndex = Math.floor(Math.random() * filteredTeams.length);
  return filteredTeams[randomIndex].id;
};
