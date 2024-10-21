import { InformationsUser } from '@/features/profileUser/components/InformationsUser';
import React from 'react'
import { getProfileUser } from '@/features/profileUser/server/getProfileUser';

interface ProfileUserProps {
  params: Promise<{
    userId: string
  }>
}

const ProfileUser = async (props: ProfileUserProps) => {
  const {userId} = await props.params;
  const userDetails = await getProfileUser(userId)

  return (
    <section className='w-full px-2'>
        {/* informations user */}
        <InformationsUser userDetails={userDetails} />
        
        {/* pins user */}
    </section>
  )
}

export default ProfileUser