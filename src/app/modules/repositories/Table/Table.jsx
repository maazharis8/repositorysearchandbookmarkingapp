import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import tableCustomStyles from "./TableCustomStyle";
import CustomPagination from "../../../Components/_shared/CustomPagination/CustomPagination";
import "./style.css";
import { columns } from "./column";

function ReactDataTable({
  data,
  pageCount,
  activePage,
  rowPerPages,
  totaldata,
  handleRowsPerPage,
  handlePageClick,
}) {
  const [bookmarks, setBookmarks] = useState(JSON.parse(localStorage.getItem("bookmarks")) || []);
  const handleBookMark = (repo) => {
      const existingBookmark = bookmarks.find(
        (bookmark) => bookmark.id === repo.id
      );

      if (existingBookmark) {
        const updatedBookmarks = bookmarks.filter(
          (bookmark) => bookmark.id !== repo.id
        );
        setBookmarks(updatedBookmarks);
      } else {
        const updatedBookmarks = [...bookmarks, repo];
        setBookmarks(updatedBookmarks);
      }
  };
  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);
  return (
    <>
      <DataTable
        columns={columns(handleBookMark, bookmarks)}
        data={data}
        customStyles={tableCustomStyles}
        pagination
        highlightOnHover
        persistTableHead={true}
        paginationServer
        paginationComponent={() => {
          return (
            <CustomPagination
              handleRowsPerPage={handleRowsPerPage}
              handlePageClick={handlePageClick}
              totalData={totaldata}
              pageCount={pageCount}
              activePage={activePage}
              rowPerPages={rowPerPages}
              totalItems={rowPerPages * (activePage + 1)}
            />
          );
        }}
      />
    </>
  );
}

export default ReactDataTable;
