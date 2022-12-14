import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'

const App = () => {
  const livepeerSourceURL =
    'https://livepeercdn.com/asset/6ac5mve3jjvs8i89/video';

  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('ethereum')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
            {/* <video
              src={livepeerSourceURL}
              controls
              width='600'
              height='450'
              autoPlay={true}
            ></video> */}
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
