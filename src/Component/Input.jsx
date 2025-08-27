import React, { useEffect, useState } from 'react'
import { MdAddTask } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { getDatabase, push, ref, set, onValue } from "firebase/database";


const Input = () => {

    const [Todo, setTodo] = useState("")
    const [Todos, setTodos] = useState([])
    const notify = () => toast.error('Please Enter Your Task!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });
    const success = () => toast.success('Task Update Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
    });


    const heandelChange = (e) => {
        setTodo(e.target.value)
    }

    const heandelClick = () => {
        if (!Todo) {
            notify()
        } else {
            const db = getDatabase();
            set(push(ref(db, 'Todo/')), {
                TodoName: Todo
            }).then(() => {
                success()
                setTodo("")
            });
        }
    }

    useEffect(() => {
        const db = getDatabase();
        const todoRef = ref(db, 'Todo/')
        onValue(todoRef, (snapshot) => {
            const Arr = []
            snapshot.forEach((item) => {
                Arr.push(item.val())
                setTodos(Arr)
            })
        })
    }, [])


    return (
        <div>
            <h1 className='text-4xl font-bold py-10 bg-cyan-400 w-[600px] pl-30 m-auto rounded-tl-[40px] rounded-tr-[40px] flex items-center gap-4'>
                <FaTasks />
                To Do Application
            </h1>
            <div className='bg-[#1e293b] text-white p-15 rounded-br-[40px] rounded-bl-[40px] w-[600px] m-auto'>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    transition={Bounce}
                />
                <label htmlFor="input" className='flex items-center gap-1 text-[20px]'>
                    Enter Your Task
                    <MdAddTask />
                </label>
                <input type="text" value={Todo} placeholder='Enter Your Task' className='mt-2 block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md pl-2.5 h-10 w-full text-[18px]' onChange={heandelChange} />
                <button className='cursor-pointer m-auto block mt-6 px-8 py-3 bg-white/20 border border-white/30 rounded-xl text-white hover:bg-cyan-400/90 hover:text-black duration-500 linear text-[18px] hover:font-semibold' onClick={heandelClick}>Submit</button>

                <ul className="mt-6 rounded-lg bg-gray-700 text-white">
                    {Todos.map((item, index) => {
                        return (
                            <li key={index} className="w-full px-4 py-2 border-b rounded-t-lg border-gray-600">
                                {item.TodoName}
                            </li>
                        )
                    })}
                </ul>

                <button className='block m-auto mt-6'>
                    <a href="https://to-do-rafin-default-rtdb.firebaseio.com/" className='underline' target="blank">Click Me For Database</a>
                </button>
            </div>
        </div>
    )
}

export default Input

// Database Link: https://to-do-rafin-default-rtdb.firebaseio.com/
