import { CreateItem } from 'Pages/Create Item'
import { ExploreItem } from 'Pages/EploreItem'
import { Explore } from 'Pages/Explore'
import Home from 'Pages/Home'
import Wallet from 'Pages/Wallet'
import Authors from 'Pages/Authors'
import AuthorsProfiles from 'Pages/AuthorsProfiles'
import AuthorActivity from 'Pages/AuthorActivity'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LoginPage } from 'Pages/Auth/Login/LoginPage'
import { ForgotPasswordPage } from 'Pages/Auth/ForgotPassword/ForgotPasswordPage'
import { RegisterPage } from 'Pages/Auth/Signup/RegisterPage'
import BlogDetails from 'Pages/Blogs/BlogDetails'

const NFTRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/forgotpassword' element={<ForgotPasswordPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/exploreitem/:id' element={<ExploreItem />} />
        <Route path='/authors/:id' element={<Authors />} />
        <Route path='/authoractivity/:id' element={<AuthorActivity />} />
        <Route path='/authorsprofiles/:id' element={<AuthorsProfiles />} />
        <Route path='/createitem' element={<CreateItem />} />
        <Route path='/blogdetails' element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
export default NFTRoutes
