import React from "react";
import classNames from 'classnames';
import "components/DayListItem.scss";
export default function DayListItem(props) {

 
  const formatSpots = (spots) => {
    if (!spots) {
      return `no spots remaining`;
    }

    if (spots === 1) {
      return `${spots} spot remaining`;
    }

    return `${spots} spots remaining`;
  }

  const availability = formatSpots(props.spots);
  const dayListItemClass = classNames("dayClass", {
    "day-list__item": true,
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  return (

    <li  className={dayListItemClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{availability}</h3>
    </li>
  );
  }