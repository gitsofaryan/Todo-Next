"use client"
import React, { useState } from 'react'

const page = () => {

  const [title, setTitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setMainTask([...mainTask, { title, desc }])
    setTitle('')
    setdesc('')
  }

  const DltHandler=(i)=>{
    // i=1
    const newMainTask = mainTask.filter((_, index) => index !== i);
    setMainTask(newMainTask);
  }




  let renderTask = <h2>No Task Available</h2>

  if(mainTask.length>0){
    renderTask=mainTask.map((t,i)=>{
      return <li key={i} className='flex items-center justify-between'>
        <div className='flex items-center justify-between w-2/3'>
        <h5 className='text-2xl font-semibold'>{t.title}</h5>
        <p className='text-xl font-semibold'>{t.desc}</p>

      </div>
      <button className='bg-red-400 text-white px-4 py-2 font-bold rounded'
  onClick={(e) => DltHandler(i)}

      >Delete</button>
      </li>
    })
  }


  return (
    <div>
      <h1 className='bg-black text-white p-5 text-3xl font-bold text-center'>My Todo List</h1>

      <form onSubmit={submitHandler}>
        <input placeholder='Enter Task Here' type="text" className='text-2xl border-zinc-800 border-2 m-5 py-2 ' value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input placeholder='Enter Description Here' type="text" className='text-2xl border-zinc-800 border-2 m-5 py-2 '
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-white px-4 py-2 text-2xl font-bold rounded mx-5' >Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  )
}

export default page
