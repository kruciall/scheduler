import React from "react";
import classNames from 'classnames';
import "components/DayListItem.scss";
export default function DayListItem(props) {

 
  const spotsRemain = () => {
    if (!props.spots) {
      return `no spots remaining`;
    }

    if (props.spots === 1) {
      return `${props.spots} spot remaining`;
    }

    return `${props.spots} spots remaining`;
  }

  const dayListItemClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": !props.spots
  })

  return (
    <li  className={dayListItemClass} onClick={() => props.setDay(props.name)} selected={props.selected} data-testid="day">
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{spotsRemain()}</h3>
    </li>
  );
  }