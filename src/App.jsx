import { useState } from 'react'
import './App.css'
import Notes from "./components/notes";
import useSize from './hooks/useSize';

function App() {

  const windowSX = useSize();
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Link in bio for my Frontend Interview Prep Course",
    },
    {
      id: 2,
      text: "Like this Video and Subscribe to Roadside Coder",
    },
  ])

  const [note, setNote] = useState("");

  return (
    <div 
      className="flex flex-col p-[15px]"
    >
      <div className="top-[20px] mr-auto ml-auto">
        <input
          className="bg-gray-200 outline-none rounded mr-[10px] border border-gray-300 h-[50px] hover:border-gray-400 transition ease-in-out duration-300"
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          className="h-[50px] focus:outline-none focus:bg-slate-500 hover:border-gray-400 hover:scale-110 transition duration-300"
          onClick={() => {
            setNotes([...notes, {id: notes.length + 1, text: note}]);
            setNote("");
          }}
        >
          Add Note
        </button>
        <div>
      <div className="window">
        Width : <span>{windowSX[0]}</span>
      </div>
      <div className="window">
        Height : <span>{windowSX[1]}</span>
      </div>
      </div>
      </div>
      <Notes 
        notes={notes} 
        setNotes={setNotes} 
      />
      
      <div className='flex flex-row'>
        <div className="bg-cyan-50 text-black mr-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero non id quam voluptate totam consectetur repellat nobis? Consequatur esse, nihil quod ratione in quae assumenda ut quaerat consequuntur voluptatem ex?</div>
        <div className='bg-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, fugit, libero similique sed qui quaerat quos aspernatur facere iusto harum assumenda quia deleniti expedita hic itaque animi neque! Iure, eos.</div>
      </div>
    </div>
  )
}

export default App
