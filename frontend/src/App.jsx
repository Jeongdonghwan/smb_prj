import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

// 코드 스플리팅
const Home = lazy(() => import('./pages/Home'))
const Place = lazy(() => import('./pages/Place'))
const Blog = lazy(() => import('./pages/Blog'))
const Youtube = lazy(() => import('./pages/Youtube'))
const Homepage = lazy(() => import('./pages/Homepage'))
const Review = lazy(() => import('./pages/Review'))
const VBizRing = lazy(() => import('./pages/VBizRing'))
const Smartstore = lazy(() => import('./pages/Smartstore'))
const Instagram = lazy(() => import('./pages/Instagram'))
const SpecSheet = lazy(() => import('./pages/SpecSheet'))

// 로딩 스피너
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/place" element={<Place />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/youtube" element={<Youtube />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/review" element={<Review />} />
            <Route path="/vbizring" element={<VBizRing />} />
            <Route path="/smartstore" element={<Smartstore />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/spec-sheet" element={<SpecSheet />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
