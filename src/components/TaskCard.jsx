/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { TaskContext } from '../context/taskContext'

function TaskCard ({ task }) {
  const { deleteTask } = useContext(TaskContext)

  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
      <p className='text-gray-500'>{task.description}</p>
      <button className='bg-red-500 px-2 py-1 mt-4 rounded-md hover:bg-red-400' onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  )
}

export default TaskCard
