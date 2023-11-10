import ReactPaginate from "react-paginate";
import "./style.css";

const CustomPagination = ({
  handleRowsPerPage,
  handlePageClick,
  pageCount,
  totalData,
  activePage,
  rowPerPages,
  totalItems
}) => {
  return (
    <>
      <div
        className={`mt-2 paginationBorder d-flex mt-2 align-items-center justify-content-between flex-column flex-md-column flex-lg-row`}
      >
        <section
          className={`d-flex flex-column flex-md-column flex-lg-row align-items-center gap-3 pag`}
        >
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            breakClassName={"page-item"}
            forcePage={activePage}
            breakLinkClassName={"page-link"}
            containerClassName={"pagination"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            activeClassName={"active"}
          />
          <select
            name="rowsPerPage"
            id="rowsPerPage"
            className={`rowsperpageSelect my-3 my-md-3 my-lg-0`}
            defaultValue={rowPerPages}
            onChange={handleRowsPerPage}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </section>
        <p className={`paginationEntries mb-0`}>
          Showing {rowPerPages * activePage + 1} to{" "}
          {totalItems < totalData ? totalItems : totalData}
          {" "} of {totalData}{" "}
          Enteries
        </p>
      </div>
    </>
  );
};

export default CustomPagination;
