export function getAppointmentsForDay(state, name) {

  const filteredDays = state.days.filter(day => day.name === name);
  if (state.days.length === 0 || filteredDays.length === 0) {
    return [];
  }

  const apptsFromDays = filteredDays[0].appointments;

  let appointmentsForDayArr = [];

  for (let appt of apptsFromDays) {
    appointmentsForDayArr.push(state.appointments[appt]);
  }
  return appointmentsForDayArr;
};


export function getInterviewersForDay(state, name) {

  const filteredDays = state.days.filter(day => day.name === name);
  if (state.days.length === 0 || filteredDays.length === 0) {
    return [];
  }

  const interviewersFromDays = filteredDays[0].interviewers;

  let interviewersForDayArr = [];

  for (let interviewers of interviewersFromDays) {
    interviewersForDayArr.push(state.interviewers[interviewers]);
  }
  return interviewersForDayArr;
};


 export function getInterview(state, interview) {
  if (!interview) return null;

  const interviewInfo = state.interviewers[interview.interviewer];
  return {
    student: interview.student,
    interviewer: interviewInfo
  }

}

