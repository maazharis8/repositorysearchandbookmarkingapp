import { useState, useCallback } from "react";
import Table from "./Table/Table";
import { useQuery } from "@tanstack/react-query";
import { getAllRepositories } from "./api/repositoryAPI";
import useDebounce from "../../../hooks/useDebounce";
import { Container } from "react-bootstrap";

const Repositories = () => {
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [tableOptions, setTableOptions] = useState({
    rowPerPages: 10,
    activePage: 0,
  });

  const debouncedGlobalFilterValue = useDebounce(globalFilterValue, 1000);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    setGlobalFilterValue(value);
  };

  const handleRowsPerPage = (e) => {
    setTableOptions((prev) => ({
      ...prev,
      rowPerPages: e.target.value,
      activePage: 0,
    }));
  };

  const handlePageClick = (event) => {
    setTableOptions((prev) => ({ ...prev, activePage: event.selected }));
  };

  const getRepositories = useCallback(async () => {
    let apiQueryParams = {
      q: debouncedGlobalFilterValue,
      page: tableOptions?.activePage + 1,
      per_page: tableOptions?.rowPerPages,
    };
    if (debouncedGlobalFilterValue) {
      return getAllRepositories(apiQueryParams);
    } else {
      return [];
    }
  }, [
    tableOptions?.rowPerPages,
    tableOptions?.activePage,
    debouncedGlobalFilterValue,
  ]);

  const {
    isLoading,
    data: repositories,
    isError,
  } = useQuery(
    ["repositories", tableOptions, debouncedGlobalFilterValue],
    getRepositories
  );
  const pageCount = Math.ceil(repositories?.total_count / tableOptions?.rowPerPages);

  return (
    <>
      <section className="table-wrapper-outer data-table pb-5">
        <Container>
          <div className="d-flex py-3 justify-content-between align-items-center flex-wrap flex-column flex-md-column flex-lg-row">
            <h3 className="mb-0">Search Repositories</h3>
            <span className="p-input-icon-right mt-2 mt-md-2 mt-lg-0">
              <input
                className="form-control py-lg-2"
                value={globalFilterValue}
                onChange={onGlobalFilterChange}
                placeholder="Keyword Search"
              />
            </span>
          </div>
          <Table
            tableOptions={tableOptions}
            activePage={tableOptions?.activePage}
            rowPerPages={tableOptions?.rowPerPages}
            totaldata={repositories?.total_count}
            pageCount={pageCount}
            data={repositories?.items}
            handlePageClick={handlePageClick}
            handleRowsPerPage={handleRowsPerPage}
          />
        </Container>
      </section>
    </>
  );
};

export default Repositories;
