import { type SaveType } from "./types";

interface TeamRecommendation {
  id: number;
  name: string;
  logo: string;
  league: string;
  country: string;
  reason: string;
  difficulty: number;
  stadium: Stadium;
  save_type: SaveType[];
}

type Stadium = {
  name: string;
  image: string;
  city: string;
};

export const teamRecommendations: TeamRecommendation[] = [
  {
    id: 1,
    name: "AFC Wimbledon",
    logo: "/teams/logos/wimbledon.webp",
    league: "EFL League Two",
    country: "England",
    reason:
      "A fan-owned club with a remarkable rise through the leagues. Great for a long-term save.",
    difficulty: 2,
    stadium: {
      name: "Plough Lane",
      image: "/teams/stadiums/st_wimbledon.jpg",
      city: "London",
    },
    save_type: ["long_term"],
  },
  {
    id: 2,
    name: "Union Berlin",
    logo: "/teams/logos/union_berlin.webp",
    league: "Bundesliga",
    country: "Germany",
    reason:
      "Recently promoted and now competing in Europe. Offers a unique underdog challenge.",
    difficulty: 4,
    stadium: {
      name: "Stadion An der Alten Försterei",
      image: "/teams/stadiums/st_union_berlin.jpg",
      city: "Berlin",
    },
    save_type: ["long_term", "special"],
  },
  {
    id: 3,
    name: "Real Sociedad",
    logo: "/teams/logos/rso.webp",
    league: "La Liga",
    country: "Spain",
    reason:
      "Known for youth development and attacking football. Ideal for building around young talent.",
    difficulty: 3,
    stadium: {
      name: "Anoeta Stadium",
      image: "/teams/stadiums/st_rso.jpg",
      city: "San Sebastián",
    },
    save_type: ["long_term"],
  },
  {
    id: 4,
    name: "Atalanta",
    logo: "/teams/logos/atalanta.webp",
    league: "Serie A",
    country: "Italy",
    reason:
      "Exciting tactics and a reputation for developing players. Perfect for tactical experimentation.",
    difficulty: 4,
    stadium: {
      name: "Gewiss Stadium",
      image: "/teams/stadiums/st_atalanta.webp",
      city: "Bergamo",
    },
    save_type: ["long_term"],
  },
  {
    id: 5,
    name: "FC Nordsjælland",
    logo: "/teams/logos/nordsjælland.webp",
    league: "Superliga",
    country: "Denmark",
    reason:
      "Focuses on youth and fast-paced football. Great for managers who love developing prospects.",
    difficulty: 2,
    stadium: {
      name: "Right to Dream Park",
      image: "/teams/stadiums/st_nordsjælland.jpg",
      city: "Farum",
    },
    save_type: ["long_term"],
  },
];
