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
import { Category } from 'Pages/Blogs/Category'
import { Tag } from 'Pages/Blogs/Tag'
import { BlogGrid } from 'Pages/Blogs/BlogGrid'
import { BlogDetails } from 'Pages/Blogs/BlogsDetails'
import Tac from 'Pages/Terms&Conditions'
import Activity from 'Pages/Activity'
import Error from 'Pages/404'
import { ContactUs } from 'Pages/Contact'
import { LeaderBoard } from 'Pages/LeaderBoard'
import Search from 'Pages/Search'
import { EditProfile } from 'Pages/EditProfile'
const NFTRoutes = () => {
  return (
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
      <Route path='/category' element={<Category />} />
      <Route path='/tag' element={<Tag />} />
      <Route path='/bloggrid' element={<BlogGrid />} />
      <Route path='/blogdetails' element={<BlogDetails />} />
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
      <Route path='/search/:input' element={<Search />} />
      <Route path='/createitem' element={<CreateItem />} />
      <Route path='/blogdetails' element={<BlogDetails />} />
      <Route path='/termsandconditions' element={<Tac />} />
      <Route path='/activity' element={<Activity />} />
      <Route path='/error404' element={<Error />} />
      <Route path='/contactus' element={<ContactUs />} />
      <Route path='/leaderboard' element={<LeaderBoard />} />
      <Route path='/editprofile' element={<EditProfile />} />
    </Routes>
  )
}
export default NFTRoutes
