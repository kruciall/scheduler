import {useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData(initial) {
  const [state, setState,] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  const setDay = day => setState({ ...state, day });

  function bookInterview(id, interview) {
    console.log(id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const remainingSpots = state.days.map((day) => {
      if (day.appointments.includes(id)) {
        day.spots = day.spots - 1;
      }
      return day;
    });

    return axios.put(`/api/appointments/${id}`,{interview})
    .then(setState({
      ...state,
      appointments,
      remainingSpots
    }))
  }


  function cancelInterview(id) {

    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    
    const remainingSpots = state.days.map((day) => {
      if (day.appointments.includes(id)) {
        day.spots = day.spots + 1;
      }
      return day;
    });
  
    return axios.delete(`/api/appointments/${id}`)
    .then(setState({
      ...state,
      appointments,
      remainingSpots
    }))   
  }

  useEffect(() => {
    const dayURL = "/api/days";
    const appointmentURL = "/api/appointments";
    const interviewersURL = "/api/interviewers";
    Promise.all([
      axios.get(dayURL),
      axios.get(appointmentURL),
      axios.get(interviewersURL)
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}
 