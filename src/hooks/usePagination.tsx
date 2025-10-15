import { useState, useMemo } from "react";
import { Pagination, PaginationInfo } from "@/components/ui/pagination";

interface UsePaginationProps<T> {
  items: T[];
  itemsPerPage: number;
}

interface UsePaginationReturn<T> {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  currentItems: T[];
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  isFirstPage: boolean;
  isLastPage: boolean;
}

interface UsePaginationProps<T> {
  items: T[];
  itemsPerPage: number;
}

interface UsePaginationReturn<T> {
  currentPage: number;
  totalPages: number;
  startIndex: number;
  endIndex: number;
  currentItems: T[];
  goToPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  isFirstPage: boolean;
  isLastPage: boolean;
  PaginationControls: React.FC;
  PaginationDetails: React.FC;
}

export const usePagination = <T,>({
  items,
  itemsPerPage,
}: UsePaginationProps<T>): UsePaginationReturn<T> => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginationData = useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    return {
      totalPages,
      startIndex,
      endIndex,
      currentItems,
    };
  }, [items, itemsPerPage, currentPage]);

  const goToPage = (page: number): void => {
    setCurrentPage(Math.max(1, Math.min(page, paginationData.totalPages)));
  };

  const nextPage = (): void => {
    goToPage(currentPage + 1);
  };

  const previousPage = (): void => {
    goToPage(currentPage - 1);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === paginationData.totalPages;

  const PaginationControls: React.FC = () => (
    <Pagination
      currentPage={currentPage}
      totalPages={paginationData.totalPages}
      onPageChange={goToPage}
      isFirstPage={isFirstPage}
      isLastPage={isLastPage}
    />
  );

  const PaginationDetails: React.FC = () => (
    <PaginationInfo
      startIndex={paginationData.startIndex}
      endIndex={paginationData.endIndex}
      totalItems={items.length}
    />
  );

  return {
    currentPage,
    ...paginationData,
    goToPage,
    nextPage,
    previousPage,
    isFirstPage,
    isLastPage,
    PaginationControls,
    PaginationDetails,
  };
};
