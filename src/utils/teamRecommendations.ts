import { type SaveType } from "./types";

interface Challenge {
  id: number;
  objective: string;
}

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
  challenges: Challenge[];
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
    country: "GB-ENG",
    reason:
      "A fan-owned club with a remarkable rise through the leagues. Great for a long-term save.",
    difficulty: 2,
    stadium: {
      name: "Plough Lane",
      image: "/teams/stadiums/st_wimbledon.jpg",
      city: "London",
    },
    save_type: ["long_term"],
    challenges: [
      {
        id: 1,
        objective: "Reach the Championship within 4 seasons",
      },
      {
        id: 2,
        objective: "Maintain the club's fan-owned status while growing",
      },
      {
        id: 3,
        objective: "Develop academy players and sell for profit",
      },
    ],
  },
  {
    id: 2,
    name: "Union Berlin",
    logo: "/teams/logos/union_berlin.webp",
    league: "Bundesliga",
    country: "DEU",
    reason:
      "Recently promoted and now competing in Europe. Offers a unique underdog challenge.",
    difficulty: 4,
    stadium: {
      name: "Stadion An der Alten Försterei",
      image: "/teams/stadiums/st_union_berlin.jpg",
      city: "Berlin",
    },
    save_type: ["special"],
    challenges: [
      {
        id: 1,
        objective: "Qualify for European competition consistently",
      },
      {
        id: 2,
        objective: "Maintain Bundesliga status while competing in Europe",
      },
      {
        id: 3,
        objective:
          "Build a sustainable team without breaking the wage structure",
      },
    ],
  },
  {
    id: 3,
    name: "Real Sociedad",
    logo: "/teams/logos/rso.webp",
    league: "La Liga",
    country: "ESP",
    reason:
      "Known for youth development and attacking football. Ideal for building around young talent.",
    difficulty: 3,
    stadium: {
      name: "Anoeta Stadium",
      image: "/teams/stadiums/st_rso.jpg",
      city: "San Sebastián",
    },
    save_type: ["long_term"],
    challenges: [
      {
        id: 1,
        objective: "Develop 3 academy players into first-team regulars",
      },
      {
        id: 2,
        objective: "Qualify for Champions League within 3 seasons",
      },
      {
        id: 3,
        objective: "Win a domestic cup competition",
      },
    ],
  },
  {
    id: 4,
    name: "Atalanta",
    logo: "/teams/logos/atalanta.webp",
    league: "Serie A",
    country: "ITA",
    reason:
      "Exciting tactics and a reputation for developing players. Perfect for tactical experimentation.",
    difficulty: 4,
    stadium: {
      name: "Gewiss Stadium",
      image: "/teams/stadiums/st_atalanta.webp",
      city: "Bergamo",
    },
    save_type: ["long_term"],
    challenges: [
      {
        id: 1,
        objective: "Reach Champions League knockout stages",
      },
      {
        id: 2,
        objective: "Maintain attacking style while improving defensively",
      },
      {
        id: 3,
        objective: "Develop and sell players for €20M+ profit annually",
      },
    ],
  },
  {
    id: 5,
    name: "FC Nordsjælland",
    logo: "/teams/logos/nordsjælland.webp",
    league: "Superliga",
    country: "DNK",
    reason:
      "Focuses on youth and fast-paced football. Great for managers who love developing prospects.",
    difficulty: 2,
    stadium: {
      name: "Right to Dream Park",
      image: "/teams/stadiums/st_nordsjælland.jpg",
      city: "Farum",
    },
    save_type: ["long_term"],
    challenges: [
      {
        id: 1,
        objective: "Win the Danish Superliga championship",
      },
      {
        id: 2,
        objective: "Qualify for European competition group stages",
      },
      {
        id: 3,
        objective: "Develop 5 youth prospects and sell for profit",
      },
    ],
  },
  {
    id: 6,
    name: "Brighton & Hove Albion",
    logo: "",
    league: "Premier League",
    country: "GB-ENG",
    reason:
      "A well-run club with a strong scouting network and modern approach. Perfect for data-driven management.",
    difficulty: 5,
    stadium: {
      name: "Amex Stadium",
      image: "/teams/stadiums/st_brighton.jpg",
      city: "Brighton",
    },
    save_type: ["special"],
    challenges: [
      {
        id: 1,
        objective: "Establish as a consistent top-half Premier League team",
      },
      {
        id: 2,
        objective: "Qualify for European competition",
      },
      {
        id: 3,
        objective: "Continue the club's innovative recruitment model",
      },
    ],
  },
  {
    id: 7,
    name: "FC Porto",
    logo: "",
    league: "Primeira Liga",
    country: "PRT",
    reason:
      "Historic club with European pedigree and excellent youth academy. Great for developing talents and competing in Europe.",
    difficulty: 3,
    stadium: {
      name: "Estádio do Dragão",
      image: "/teams/stadiums/st_porto.jpg",
      city: "Porto",
    },
    save_type: ["long_term"],
    challenges: [
      {
        id: 1,
        objective: "Win the Champions League within 5 seasons",
      },
      {
        id: 2,
        objective: "Develop and sell academy players for €100M+ profit",
      },
      {
        id: 3,
        objective: "Maintain domestic dominance while competing in Europe",
      },
    ],
  },
  {
    id: 8,
    name: "Bayer Leverkusen",
    logo: "",
    league: "Bundesliga",
    country: "DEU",
    reason:
      "Known for developing young talent and playing attractive football. Always competitive but seeking that elusive major trophy.",
    difficulty: 4,
    stadium: {
      name: "BayArena",
      image: "/teams/stadiums/st_leverkusen.jpg",
      city: "Leverkusen",
    },
    save_type: ["special"],
    challenges: [
      {
        id: 1,
        objective: "Win the Bundesliga title (break the 'Neverkusen' curse)",
      },
      {
        id: 2,
        objective: "Reach a Champions League final",
      },
      {
        id: 3,
        objective: "Develop 5 players worth €30M+ each",
      },
    ],
  },
  {
    id: 9,
    name: "RC Lens",
    logo: "",
    league: "Ligue 1",
    country: "FRA",
    reason:
      "Historic French club with passionate fans and a strong academy. Recently back in Ligue 1 with European ambitions.",
    difficulty: 3,
    stadium: {
      name: "Stade Bollaert-Delelis",
      image: "/teams/stadiums/st_lens.jpg",
      city: "Lens",
    },
    save_type: ["long_term"],
    challenges: [
      {
        id: 1,
        objective: "Establish as a consistent European qualifier",
      },
      {
        id: 2,
        objective: "Reach the knockout stages of European competition",
      },
      {
        id: 3,
        objective: "Develop academy talents and maintain the club's identity",
      },
    ],
  },
  {
    id: 10,
    name: "Club Brugge",
    logo: "",
    league: "Belgian Pro League",
    country: "BEL",
    reason:
      "Belgium's most successful club with a strong European tradition. Perfect for those who want to compete on multiple fronts.",
    difficulty: 2,
    stadium: {
      name: "Jan Breydelstadion",
      image: "/teams/stadiums/st_brugge.jpg",
      city: "Bruges",
    },
    save_type: ["long_term"],
    challenges: [
      {
        id: 1,
        objective: "Dominate Belgian football consistently",
      },
      {
        id: 2,
        objective: "Reach Champions League quarter-finals",
      },
      {
        id: 3,
        objective: "Develop Belgian talents for the national team",
      },
    ],
  },
];
