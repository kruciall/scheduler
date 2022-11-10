import PropTypes from 'prop-types';
import React from 'react';
import InterviewerListItem from './InterviewerListItem';
import 'components/InterviewerList.scss';
//receives three props 1: interviewers:array, 2: setInterviewer:function, 3: interviewer:number

export default function InterviewerList(props) {

  const list = props.interviewers.map((interviewer) => {
    return (
      <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}
      />
    );
  });

  InterviewerList.propTypes = {
    interviewers: PropTypes.array.isRequired
  };
  
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewers</h4>
      <ul className="interviewers__list">{list}</ul>
    </section>
  );


}

