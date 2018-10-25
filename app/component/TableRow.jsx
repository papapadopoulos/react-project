import React from "react";
import {Button} from "react-bootstrap";

const TableRow = ({ info, title, open : bookable, price, dates, actions}) => {
   
  return (<>
    <tr>
     <td>{info}</td>
     <td>{title}</td>
     <td>{bookable.toString()}</td>
     <td>{price.normal}</td>
     <td>{dates.start_date} - {dates.end_date}</td>
     <td><Button bsStyle="primary">View Details</Button></td>
    </tr>
    </>
  );
};

export default TableRow;
