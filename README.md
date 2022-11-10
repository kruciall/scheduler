# Interview Scheduler

Interview Scheduler is a Single Page Application to track students interview appointments. The app allows users to add, edit, and delete appointments. Interview Scheduler is a front-end React application using buil-in and custom hooks using data by the API server using PostgreSQL database. 


## Features
- Appointment days and number of slots availability displayed with different color codes depending on spot availability
- Viewing different days upon click and seeing apppointment information
- User can book a new interview upon clicking the "+" button and by typing in a name and selecting an interviewer from the list
- User can edit details of an existing appointment by clicking the edit button
- User can cancel an existing appointment by clicking the delete button (icon) and will be prompted a confirmation message to confirm

## Features Showcase

Adding a new appointment
![](https://github.com/kruciall/scheduler/blob/master/public/gifs/scheduler-addappt-gif.gif)

Editing an existing appointment
![](https://github.com/kruciall/scheduler/blob/master/public/gifs/scheduler-editingappt-gif.gif)

Deleting an existing appointment
![](https://github.com/kruciall/scheduler/blob/master/public/gifs/scheduler-deletingappt-gif.gif)

Showing form error for not inputting a name or selecting an interviewer from the list
![](https://github.com/kruciall/scheduler/blob/master/public/gifs/scheduler-formerror-gif.gif)

Viewing the different appointment days
![](https://github.com/kruciall/scheduler/blob/master/public/gifs/scheduler-showcase-gif.gif)


## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
