import React from "react";
import { Li, Ul, I } from "./styles";

interface PaginationProps {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  currentPage: number;
  onPageChange: (page: number) => void;
}

function Pagination(props: PaginationProps) {
  const { hasNextPage, hasPreviousPage, onPageChange, currentPage } = props;

  if (!hasPreviousPage && !hasNextPage) {
    return null;
  }

  return (
    <nav>
      <Ul className="pagination">
        {hasPreviousPage && (
          <Li
            className="page-item"
            onClick={() => {
              onPageChange(currentPage - 1);
            }}
          >
            <I className="fas fa-angle-left" /> Anterior
          </Li>
        )}
        {hasNextPage && (
          <Li
            className="page-item"
            onClick={() => {
              onPageChange(currentPage + 1);
            }}
          >
            Próxima <I className="fas fa-angle-right" />
          </Li>
        )}
      </Ul>
    </nav>
  );
}

export default Pagination;
