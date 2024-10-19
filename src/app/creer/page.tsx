import { CreateNewPin } from '@/components/createPage/CreateNewPin'
import { SidebarLeft } from '@/components/createPage/SidebarLeft'
import React from 'react'

const CreatePinPage = () => {
  return (
    <section className="w-full border-t border-gray-400 mt-8 flex items-start h-[calc(100vh-88px)]">
        <SidebarLeft />    

        <div className='w-full'>
          <div className='flex items-center border-b border-gray-400 w-full p-6'>
              <h2 className='text-xl font-medium'>Créer une Épingle</h2>
            </div>

            <main className='max-w-[1000px] mx-auto mt-10'>
                <CreateNewPin />
            </main>
        </div>
    </section>
  )
}

export default CreatePinPage