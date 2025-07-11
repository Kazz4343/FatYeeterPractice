import {workoutProgram as training_plan} from '../utils/index'
import WorkoutCard from './WorkoutCard';

export default function Grid() {
    const isLocked = true;
    const selsectedworkout = 4

    return (
        <div className="traning-grid-plan">
            {Object.keys(training_plan).map((workout, workoutIndex) => {
                const type = workoutIndex % 3 === 0 ? 
                'Push' : 
                workoutIndex % 3 === 1 ?
                    'Pull' : 
                    'Legs'
        
                const traningPlan = training_plan[workoutIndex]
                const dayNum = ((workoutIndex / 8) <= 1) ? '0' + (workoutIndex + 1) : workoutIndex + 1
                const icon = workoutIndex % 3 === 0 ? (
                    <i className='fa-solid fa-dumbbell'></i>
                ) : (
                    workoutIndex % 3 === 1 ? (
                        <i className='fa-solid fa-weight-hanging'></i>
                    ) : (
                        <i className='fa-solid fa-bolt'></i>
                    )
                )
            
                
                if (workoutIndex === selsectedworkout) {
                    return (
                        <WorkoutCard key={workoutIndex} traningPlan={traningPlan} type={type} workoutIndex={workoutIndex} icon={icon} dayNum={dayNum} />
                    )
                }

                return (
                    <button className={'card plan-card ' + (isLocked ? 'inactive' : '')} key={workoutIndex}> 
                        <div className='plan-card-header'>
                            <p>Day {}</p>
                        </div>
                        {isLocked ? (
                            <i className='fa-solid fa-lock'></i>
                        ) : (icon)}
                        <div className='plan-card-header'>
                            <h4><b>{type}</b></h4>
                        </div>
                    </button>
                )
            })}
        </div>
    )
}