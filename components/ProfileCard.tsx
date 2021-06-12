import React from 'react'

type Props = {
  title?: string
  content?: string
  imageUrl?: string
}

const ProfileCard = ({ title = "title", content= "content", imageUrl = "https://avatars.githubusercontent.com/u/18478417?v=4?s=400" }: Props) => (
  <div className="lg:flex items-center container mx-auto my-auto">
    <div className="lg:m-4 w-1/3 shadow-md hover:shadow-lg hover:bg-gray-100 rounded-lg bg-white my-12 mx-8">
      <img src={imageUrl} alt=""className="overflow-hidden" />
      <div className="p-4">
        <h3 className="font-medium text-gray-600 text-lg my-2 uppercase">{title}</h3>
        <p className="text-justify">{content}</p>
      </div>
    </div>
  </div>
)

export default ProfileCard
