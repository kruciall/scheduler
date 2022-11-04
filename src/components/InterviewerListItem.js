import React from 'react';
import classNames from 'classnames';
import 'components/InterviewerListItem.scss';
//step 1: replace hard-coded values with props
//step 2: add an event handle to <li>
//step 3: conditionally add classes
//step 4: conditionally render the interviewer's name

export default function InterviewerListItem(props) {


  const interviewerListItemClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
    });
  
  return (
    <li className={interviewerListItemClass} onClick={props.setInterviewer}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
  {props.selected && props.name}
</li>
  )
}

// const interviewer = {
//   id: 1,
//   name: "Sylvia Palmer",
//   avatar: "https://i.imgur.com/LpaY82x.png"
// };