"use client"
import {useForm} from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { UploadDropzone } from '../utils/uploadthing'
import { useState } from 'react'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { createPin } from '@/server/CreatePin'

export const CreateNewPin = () => {
  const {register, handleSubmit, formState: {errors}} = useForm()
  const [imageUrl, setImageUrl] = useState<string>("")

  const onSubmit = async (data: any) => {
    try{
      const pin = await createPin({imageUrl, ...data})
      console.log(pin)
    }catch(error){
      console.log(error)
    }
  }

  return <form onSubmit={handleSubmit(onSubmit)} className="flex items-start gap-10 max-md:flex-col">
    {/* left side */}
    <div className='w-[40%]'>
      {!imageUrl ? (
        <>
          <div className='w-full h-[500px] flex-col bg-gray-200 rounded-3xl border border-dashed border-gray-400 flex items-center justify-center'>
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setImageUrl(res[0].url)
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
        </>
      ): (
          <img src={imageUrl} alt='image' className='w-full h-[300px] rounded-3xl object-contain' />
      )}
    </div>

    {/* right side */}
    <div className='w-[60%] space-y-8'>
      {/* title, description, link */}
      <div className='flex flex-col gap-2'>
        <label className='text-sm'>Titre</label>
        <Input 
        {...register('title')}
        placeholder='Ajoutez un titre' className='py-[25px] rounded-2xl border border-gray-400 px-5 text-md'/>
        {errors.title && <p className='text-red-500 text-sm'>{errors.title.message as string}</p>}
      </div>
      <div className='flex flex-col gap-2'>
        <label className='text-sm'>Description</label>
        <Textarea 
        {...register('description')}
        placeholder='Ajoutez une description détaillé' className='py-[25px] rounded-2xl border border-gray-400 px-5 text-md'/>
        {errors.description && <p className='text-red-500 text-sm'>{errors.description.message as string}</p>}
      </div>
      <div className='flex flex-col gap-2'>
        <label  className='text-sm'>Lien</label>
        <Input 
        {...register('link')}
        placeholder='Ajoutez un lien' className='py-[25px] rounded-2xl border border-gray-400 px-5 text-md'/>
        {errors.link && <p className='text-red-500 text-sm'>{errors.link.message as string}</p>}
      </div>
      <Button type='submit' className='w-fit px-5 rounded-full bg-red-500 text-white text-md font-medium hover:bg-red-600'>Enregistrer</Button>
    </div>
  </form>
}