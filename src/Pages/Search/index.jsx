import React, { useEffect, useState } from 'react'
import { exploreCardData } from 'assets/Data'
import { useParams } from 'react-router-dom'
import { Thumbnail } from 'Pages/Explore/Thumbnail'
import Navbar from 'components/Navbar/Navbar'
const Search = () => {
  const [searchList, setSearchList] = useState([])
  const { input } = useParams()
  const updateInput = async () => {
    console.log('input is ', input)
    const filtered = exploreCardData.filter((exploreData) => {
      return exploreData.heading.toLowerCase().includes(input.toLowerCase())
    })
    setSearchList(filtered)
  }
  useEffect(() => {
    updateInput()
    window.scrollTo(0, 0)
  }, [input])
  return (
    <div>
      <Navbar />
      <div className='mt-44'>
        {searchList.length > 0 ? (
          <Thumbnail data={searchList} />
        ) : (
          <h1 className='text-4xl text-indigo-400 font-bold my-52'>
            Sorry no data matches
          </h1>
        )}
      </div>
    </div>
  )
}
export default Search
