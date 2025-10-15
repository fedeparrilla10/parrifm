import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import TeamsTable from "@/components/TeamsTable";

const AllTeams: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto py-8">
      <TeamsTable />

      <div className="mt-4 flex justify-center">
        <Button variant="outline" size="sm" onClick={() => navigate("/")}>
          <ArrowLeft className="mr-0.5 mt-0.5" />
          Back
        </Button>
      </div>
    </section>
  );
};

export default AllTeams;
