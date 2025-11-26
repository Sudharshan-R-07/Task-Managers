import React from "react"
const TaskTable = ({tasks})=>{
    return(
        <div>
            <div className="flex justify-between items-center ">
            <input type="text" className="border border-gray-400 m-5 p-1" placeholder="Search"></input>
        
            <button className="bg-blue-300 rounded mr-5 p-2 mt-5 ">+New Task</button>
        </div>
            
        
        <table className="w-full bg-white shadow rounded-lg overflow-hidden text-left mt-14">
            
            <thead className="bg-gray-200">
                
                <tr>
                    
                    <th className="p-3 font-semibold">Title</th>
                    <th className="p-3 font-semibold">Description</th> 
                    <th className="p-3 font-semibold">Priority</th>
                    <th className="p-3 font-semibold">Due</th>
                    <th className="p-3 font-semibold">Status</th>
                    <th className="p-3 font-semibold">Actions</th>

                </tr>
            </thead>
            <tbody>
                {tasks.map((t=>(
                    <tr key={t.id}>
                        <td className="p-3">{t.title}</td>
                        <td className="p-3">{t.desc}</td>
                        <td className="p-3">{t.priority}</td>
                        <td className="p-3">{t.due}</td>
                        <td className="`p-3">
                           {t.priority}</td>
                        <td className="p-3 space-x-4    ">
                        <button className="p-3">✅</button>
                       <button className="p-3 bg-red-500 rounded px-5" >Edit</button>
                       <button className="p-3 bg-blue-500 rounded px-5 ">Delete</button></td>
                    </tr>

               ) ))}

            </tbody>
        </table>
         </div>
    )
   
}

export default TaskTable