import { teamRecommendations } from "./teamRecommendations";

const randomFormula = (): number =>
  Math.floor(Math.random() * teamRecommendations.length) + 1;

export const randomTeamId: number = randomFormula();

export const randomizeTeam = (): number => {
  return randomFormula();
};
