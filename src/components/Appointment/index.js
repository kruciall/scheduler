// import Appointment from "components/Appointment";
import React from 'react';
import './styles.scss';
import Header from './Header';
import Show from './Show';
import Empty from './Empty';
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";


  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  //Create interview: receive student name and interviewer and transitions to saving status, then shows the appointment when API res finishes. If there is an error it will show the error message
  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);

    props
      .bookInterview(props.id, interview)
      .then(() => transition(SHOW))
      .catch((error) => transition(ERROR_SAVE, true));
  }

  //Remove interview: transitions to deleting status, then call the function to make cancellation req to server, once promise resolves transition to empty and if there is an error it will show the error message
  function remove() {
      transition(DELETING, true);
      props
       .cancelInterview(props.id)
       .then(() => transition(EMPTY))
       .catch((error) => transition(ERROR_DELETE, true))
     }

  //Edit Interview: transitions to EDIT status where the user can update name and interviewer
  function edit() {
    transition(EDIT);
  }

  return (
    <article className="appointment" data-testid="appointment" >
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={(edit)}
        />
      )}
      {mode === CREATE &&
        <Form
          name={props.name}
          value={props.value}
          interviewers={props.interviewers}
          onCancel={back}
          onSave={save}
        />}
      {mode === SAVING && <Status message="Saving!" />}
      {mode === DELETING && <Status message="Deleting Appointment"/>}
      {mode === CONFIRM && <Confirm
        onCancel={back}
        onConfirm={remove}
        message="Are you sure you want to delete this appointment"
      />}
      {mode === EDIT && <Form
        name={props.name ? props.name : props.interview.student}
        value={props.value ? props.value : props.interview.id}
        interviewers={props.interviewers}
        onCancel={back}
        onSave={save}
      />}
      {mode === ERROR_SAVE && <Error message="Error saving! Please try again!" onClose={back}/>}
      {mode === ERROR_DELETE && <Error message="Error deleting! Please try again!" onClose={back}/>}
    </article>
  );
}