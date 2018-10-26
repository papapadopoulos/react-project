import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const TableRow = ({ id, info, title, open: bookable, price, dates, match }) => {
  return (
    <>
      <tr>
        <td>{info}</td>
        <td>{title}</td>
        <td>{bookable && "\u2713"}</td>
        <td>{price.normal}</td>
        <td>
          {dates.start_date} - {dates.end_date}
        </td>
        <td>
          <Link to={`/course/${id}`}>
            <Button bsStyle="primary">View Details</Button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
