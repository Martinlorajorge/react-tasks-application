/* eslint-disable react/prop-types */

import TaskCard from './TaskCard'

import { useContext } from 'react' // paso 1
import { TaskContext } from '../context/taskContext' // Paso 2

function TaskList () {
  const { tasks } = useContext(TaskContext) // Paso 3, asi lo traigo desde el context

  if (tasks.length === 0) {
    return <h1 className='text-white text-4xl font-bold text-center'>No hay tareas aun</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-2'>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList
