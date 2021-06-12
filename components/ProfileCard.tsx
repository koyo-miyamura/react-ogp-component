import React from 'react'

type Props = {
  title?: string
  content?: string
  imageUrl?: string
}

const ProfileCard = ({ title = "", content= "", imageUrl = "" }: Props) => (
  <div className="lg:m-4 lg:w-1/3 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
    <img src={imageUrl} alt=""className="overflow-hidden" />
    <div className="p-4">
      <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">{title}</h3>
      <p className="text-justify">{content}</p>
    </div>
  </div>
)

export default ProfileCard
