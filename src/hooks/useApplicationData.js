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
  
  useEffect(() => {
    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')
    ])
    .then(all => {
      setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    });
  }, []);

  function remainingSpots(appointments) {
    return state.days.map(day => {
       const newDay = {...day}
       let spots = 0;
       newDay.appointments.forEach(id => {
         if (appointments[id].interview === null) {
           spots++;
         } 
       })
       newDay.spots = spots;
       return newDay
     })
    }
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
  
    const days = remainingSpots(appointments); 
    return axios.put(`/api/appointments/${id}`, { interview })
    .then(() => {
      setState(prev => ({ ...prev, appointments, days }))//update state
    });
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

    
    const days = remainingSpots(appointments); 
    return axios.delete(`/api/appointments/${id}`)
      .then(() => setState({ ...state, appointments , days}));
  }
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
}