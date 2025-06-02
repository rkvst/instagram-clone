import React from 'react'
import Stories from './Stories'
import Posts from './Posts'

function Feed() {
  return (
    <div className="flex flex-col h-screen overflow-y-auto items-center pb-32">
      <Stories />
      <Posts />

    </div>
  )
}

export default Feed
