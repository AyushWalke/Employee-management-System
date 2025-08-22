import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[40%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>22 aug 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete this project</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis temporibus veniam, eum enim nulla est!</p>
        </div>
        
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>22 aug 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete this project</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis temporibus veniam, eum enim nulla est!</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>22 aug 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete this project</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis temporibus veniam, eum enim nulla est!</p>
        </div>

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
                <h4 className='text-sm'>22 aug 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete this project</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis temporibus veniam, eum enim nulla est!</p>
        </div>

    </div>
  )
}

export default TaskList