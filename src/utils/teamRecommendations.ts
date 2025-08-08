export type TeamRecommendation = {
  id: number;
  name: string;
  league: string;
  country: string;
  reason: string;
};

export const teamRecommendations: TeamRecommendation[] = [
  {
    id: 1,
    name: "AFC Wimbledon",
    league: "EFL League Two",
    country: "England",
    reason:
      "A fan-owned club with a remarkable rise through the leagues. Great for a long-term save.",
  },
  {
    id: 2,
    name: "Union Berlin",
    league: "Bundesliga",
    country: "Germany",
    reason:
      "Recently promoted and now competing in Europe. Offers a unique underdog challenge.",
  },
  {
    id: 3,
    name: "Real Sociedad",
    league: "La Liga",
    country: "Spain",
    reason:
      "Known for youth development and attacking football. Ideal for building around young talent.",
  },
  {
    id: 4,
    name: "Atalanta",
    league: "Serie A",
    country: "Italy",
    reason:
      "Exciting tactics and a reputation for developing players. Perfect for tactical experimentation.",
  },
  {
    id: 5,
    name: "FC Nordsjælland",
    league: "Superliga",
    country: "Denmark",
    reason:
      "Focuses on youth and fast-paced football. Great for managers who love developing prospects.",
  },
];
