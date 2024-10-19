"use client"
import {useForm} from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { UploadDropzone } from '../utils/uploadthing'

export const CreateNewPin = () => {
  return <div className="flex items-start gap-5 max-md:flex-col">
    {/* left side */}
    <div className='w-[35%]'>
      <div className='w-full h-[500px] flex-col bg-gray-200 rounded-3xl border border-dashed border-gray-400 flex items-center justify-center'>
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            console.log(res)
          }}
          onUploadError={(error: Error) => {
            console.log(error)
          }}
        />
        <p className='text-center px-5 my-7 text-sm'>Nous vous recommandons d'utiliser des fichiers .jpg de grande qualité d'une taille maximum de 20 MB Mo ou des fichiers MP4 d'une taille
          maximum de 200 Mb Mo.
        </p>
      </div>
      <div className='w-full h-[1px] bg-gray-400 my-5'></div>
      <Button className='w-full rounded-full bg-gray-200 text-black hover:bg-gray-300 text-md font-medium'>Enregistrer depuis une URL</Button>
    </div>

    {/* right side */}
    <div className='w-[65%]'>
      
    </div>
  </div>
}