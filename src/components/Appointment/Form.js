import React, { useState } from 'react';
import InterviewerList from 'components/InterviewerList';
import Button from 'components/Button';


export default function Form(props) {

  //use existing student name and interviewer if edit appointment - || values will be "" and null
  const [student, setStudent] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState (props.interviewer || null);
  const [error, setError] = useState("");
  
  //if user cancels form submission we reset the form value to "" and null
  const reset = () => {
    setStudent("")
    setInterviewer(null)
  }
  const cancel = () => {
    reset();
    props.onCancel()
  }

  //verify that the user has input a name value and selected interviewer
  function validate() {
    if (student === "") {
      setError("Student name cannot be blank");
      return;
    }
    if (interviewer === null) {
      setError("Please select an interviewer")
      return;
    }
    setError("");
    props.onSave(student, interviewer);
  }
  
  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off"  onSubmit={event => event.preventDefault()}>
          <input
            data-testid="student-name-input"
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={student}
            onChange={(event) => setStudent(event.target.value)}
          />
        </form>
        <section className="appointment__validation">{error}</section>
        <InterviewerList
        interviewers={props.interviewers}
        value={interviewer}
        onChange={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button onClick={cancel} danger >Cancel</Button>
          <Button onClick={validate} confirm >Save</Button>
        </section>
      </section>
    </main>
  );
}