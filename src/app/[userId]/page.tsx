import React from 'react'

interface ProfileUserProps {
  params: Promise<{
    userId: string
  }>
}

const ProfileUser = async (props: ProfileUserProps) => {
  const {userId} = await props.params;

  return (
    <div>ProfileUser</div>
  )
}

export default ProfileUser