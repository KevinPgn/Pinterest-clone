import { SidebarLeft } from '@/components/createPage/SidebarLeft'
import React from 'react'

const CreatePinPage = () => {
  return (
    <section className="w-full border-t border-gray-400 mt-8 flex items-start h-[calc(100vh-88px)]">
        <SidebarLeft />    

        <div className='w-full flex items-center justify-center'>
            <div className='flex items-center border-b border-gray-400 w-full p-6'>
                <h2 className='text-xl font-medium'>Créer une Épingle</h2>
            </div>
        </div>
    </section>
  )
}

export default CreatePinPage