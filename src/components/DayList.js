import React from 'react';
import DayListItem from './DayListItem';

export default function DayList(props) {
  const schedule = props.days.map(day => {

    return (
      <DayListItem
        key={day.id}
        name={day.name}
        selected={day.name === props.day}
        setDay={props.onChange}
        spots={day.spots}
      />
    );
  });
  return <ul>{schedule}</ul>

}