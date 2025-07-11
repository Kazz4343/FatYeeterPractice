import React from "react";

export default function WorkoutCard(props) {
    const {trainingPlan, workoutIndex, type, dayNum, icon} = props;

    const {warmup, workout } = trainingPlan || {}

    return (
        <>
            <div className="workout-container">
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
                        </div>
                    </React.Fragment>
                )
            })}
            </div>
        </>
    )
}