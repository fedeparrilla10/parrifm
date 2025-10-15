import { Link } from "react-router";
import { Shield } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { teamRecommendations } from "@/utils/teamRecommendations";
import { usePagination } from "@/hooks/usePagination";
import Flag from "react-flagpack";

const ITEMS_PER_PAGE = 6;

const TeamsTable: React.FC = () => {
  const {
    currentItems: currentTeams,
    PaginationControls,
    PaginationDetails,
  } = usePagination({
    items: teamRecommendations,
    itemsPerPage: ITEMS_PER_PAGE,
  });

  return (
    <>
      <div className="min-h-[340px] overflow-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <Table>
          <TableHeader className="sticky top-0 bg-background z-10">
            <TableRow>
              <TableHead className="bg-muted/50">Team</TableHead>
              <TableHead className="bg-muted/50">League</TableHead>
              <TableHead className="bg-muted/50">Country</TableHead>
              <TableHead className="bg-muted/50">Difficulty</TableHead>
              <TableHead className="text-center bg-muted/50"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTeams.map((team) => (
              <TableRow key={team.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    {team.logo ? (
                      <img
                        src={team.logo}
                        alt={`${team.name} logo`}
                        className="w-6 h-6"
                      />
                    ) : (
                      <Shield className="w-6 h-6 text-muted-foreground" />
                    )}
                    {team.name}
                  </div>
                </TableCell>
                <TableCell>{team.league}</TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-1">
                    <Flag code={team.country} size="m" />
                  </div>
                </TableCell>
                <TableCell className="text-center">
                  {team.difficulty}/5
                </TableCell>
                <TableCell className="text-right">
                  <Link to={`/teams/${team.id}`}>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between px-2 py-3 border-t">
        <PaginationDetails />
        <PaginationControls />
      </div>
    </>
  );
};

export default TeamsTable;
