/* eslint-disable react/prop-types */

import { useState, useContext } from 'react'
import { TaskContext } from '../context/taskContext'

function TaskForm () {
  const [title, setTitle] = useState('')

  const [description, setDescription] = useState('')

  const { createTask } = useContext(TaskContext) // Esto lo traigo de context

  const handleSubmit = e => {
    e.preventDefault()
    createTask({
      title,
      description
    })
    setTitle('')
    setDescription('')
  }

  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className='bg-slate-800 p-10 mb-4'>
        <h1 className='text-2xl font-bold text-white mb-3'>Crea Tu Tareas</h1>
        <input
          className='bg-slate-300 p-3 w-full mb-2'
          placeholder='Escribe tu Tarea'
          onChange={e => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea className='bg-slate-300 p-3 w-full mb-2' placeholder='Escribe la descripcion de la tarea' onChange={e => setDescription(e.target.value)} value={description} />
        <button className='bg-indigo-500 px-3 py-1 text-white rounded-md'>Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm
