import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';


// The <Form> component should track the following state:

// student:String
// interviewer:Number
// The <Form> component should have the following actions:

// setStudent:Function
// setInterviewer:Function
// The <Form> component should take the following props:
// student:String
// interviewers:Array
// interviewer:Number
// onSave:Function
// onCancel:Function

export default function Form(props) {

  const [student, setStudent] = useState(props.student || "");
  const [interviewer, setInterviewer] = useState (props.interviewer || null);
  const reset = () => {
    setStudent("")
    setInterviewer(null)
  }

  function cancel() {
    reset();
    props.onCancel()
  }

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off"  onSubmit={event => event.preventDefault()}>
          <input
            className="appointment__create-input text--semi-bold"
            name={props.student}
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
 
          />
        </form>
        <InterviewerList
        interviewers={props.interviewers}
        value={interviewer}
        onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={props.onCancel} danger >Cancel</Button>
          <Button onClick={props.onSave} confirm >Save</Button>
        </section>
      </section>
    </main>
  );
}