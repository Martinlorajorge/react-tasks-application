/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/task'

export const TaskContext = createContext()

export function TaskContextProvider (props) {
  const [tasks, setTasks] = useState([])

  function createTask (task) {
    setTasks([...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description
      }
    ])
  }

  function deleteTask (taskId) {
    setTasks(tasks.filter(task => task.id !== taskId)
    )
  }

  useEffect(() => {
    setTasks(data)
  }, [])

  return (
    <TaskContext.Provider value={{
      tasks,
      deleteTask,
      createTask
    }}
    >
      {props.children}
    </TaskContext.Provider>
  )
}
