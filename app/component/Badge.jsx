import React from "react";
import PropTypes from "prop-types";
import {Badge as ReactBadge} from "react-bootstrap";

const Badge = ({title, bubble}) => {
  return(<>
      {title} <ReactBadge>{bubble}</ReactBadge>
      </>
  )
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
  bubble: PropTypes.number.isRequired
};
export default Badge;