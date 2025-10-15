import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isFirstPage: boolean;
  isLastPage: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  isFirstPage,
  isLastPage,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="sm"
            onClick={() => onPageChange(page)}
            className="w-10"
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

interface PaginationInfoProps {
  startIndex: number;
  endIndex: number;
  totalItems: number;
}

export const PaginationInfo: React.FC<PaginationInfoProps> = ({
  startIndex,
  endIndex,
  totalItems,
}) => {
  return (
    <div className="text-sm text-muted-foreground">
      Showing {startIndex + 1} to {Math.min(endIndex, totalItems)} of{" "}
      {totalItems} teams
    </div>
  );
};
