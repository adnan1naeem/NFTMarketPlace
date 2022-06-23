import { CreateItem } from 'Pages/Create Item'
import { ExploreItem } from 'Pages/EploreItem'
import { Explore } from 'Pages/Explore'
import Home from 'Pages/Home'
import Wallet from 'Pages/Wallet'
import Authors from 'Pages/Authors'
import AuthorsProfiles from 'Pages/AuthorsProfiles'
import AuthorActivity from 'Pages/AuthorActivity'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const NFTRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/exploreitem/:id' element={<ExploreItem />} />
        <Route path='/authors/:id' element={<Authors />} />
        <Route path='/authorsprofiles/:id' element={<AuthorsProfiles />} />
        <Route path='/authoractivity/:id' element={<AuthorActivity />} />
        <Route path='/createitem' element={<CreateItem />} />
      </Routes>
    </BrowserRouter>
  )
}
export default NFTRoutes
