import React from "react";
import Modal from "./Modal";

export default function WorkoutCard(props) {
    const {trainingPlan, workoutIndex, type, dayNum, icon} = props;

    const {warmup, workout } = trainingPlan || {}

    const showExerciseDescription = {name: 'adsfds', description: 'asdfasd'}

    return (
            <div className="workout-container">
                 <Modal showExerciseDescription={showExerciseDescription} handleCloseModal={()=>{}} />
                <div className="workout-card card">
                    <div className="plan-card-header">
                        <p>Day  {dayNum}</p>
                        {icon}
                    </div>
                    <div className="plan-card-header">
                        <h2><b2>{type} Workout</b2></h2>
                    </div>
                </div>

                <div className="workout-grid">
                    <div className="exercise-name">
                        <h4>Warm up</h4>
                    </div>
                    <h6>Sets</h6>
                    <h6>Reps</h6>
                    <h6 className="weight-input">Max Weight</h6>
                    {warmup.map((warmupExercise, warmupIndex) => {
                        return (
                            <React.Fragment key={warmupIndex}>
                                <div className="exercise-name">
                                    <p>{warmupIndex + 1}. {warmupExercise.name}</p>
                                    <button className="help-icon">
                                        <i className="fa-regular fa-question" />
                                    </button>
                                </div>
                                <p className="exercise-info">{warmupExercise.sets}</p>
                                <p className="exercise-info">{warmupExercise.reps}</p>
                                <input className="weight-input" placeholder="N/A" disabled />
                    
                            </React.Fragment>
                        )
                    })}
                </div>
                
                <div className="workout-grid">
                    <div className="exercise-name">
                        <h4>Workout</h4>
                    </div>
                    <h6>Sets</h6>
                    <h6>Reps</h6>
                    <h6 className="weight-input">Max Weight</h6>
                    {workout.map((workoutExercise, workoutIndex) => {
                        return (
                            <React.Fragment key={workoutIndex}>
                                <div className="exercise-name">
                                    <p>{workoutIndex + 1}. {workoutExercise.name}</p>
                                </div>
                                <p className="exercise-info">{workoutExercise.sets}</p>
                                <p className="exercise-info">{workoutExercise.reps}</p>
                                <input className="weight-input" placeholder="14" />
                    
                            </React.Fragment>
                        )
                    })}
                </div>
            

                <div className="workout-button">
                    <button>Save & Exit</button>
                    <button disable={true}>Complete</button>
                </div>
            </div>
    )
}