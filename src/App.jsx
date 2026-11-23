import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BottomNav from './components/BottomNav'
import CaseStudyModal from './components/CaseStudyModal'
import ContactModal from './components/ContactModal'
import HomePage from './pages/HomePage'
import WorksPage from './pages/WorksPage'
import AboutPage from './pages/AboutPage'
import AudioPage from './pages/AudioPage'
import PlaygroundPage from './pages/PlaygroundPage'
import { projects } from './data/projects'
import { audioTracks } from './data/audioTracks'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const location = useLocation()

  // If user navigates to /contact, trigger the contact modal
  useEffect(() => {
    if (location.pathname === '/contact') {
      setContactModalOpen(true)
    }
  }, [location.pathname])

  const handleOpenContact = () => {
    setContactModalOpen(true)
  }

  const handleSelectProject = (project) => {
    setSelectedProject(project)
  }

  const handleTrackChange = (index) => {
    setCurrentTrackIndex(index)
  }

  return (
    <div className="min-h-screen bg-[#131411] text-[#e5e2dd] flex flex-col font-sans selection:bg-[#ffb77a] selection:text-[#4c2700]">
      <ScrollToTop />

      {/* Top Fixed Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Routing */}
      <main className="flex-1 pt-16 pb-20 md:pb-8">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onSelectProject={handleSelectProject}
                onOpenContact={handleOpenContact}
                onPlayTrack={handleTrackChange}
                currentTrackIndex={currentTrackIndex}
                isAudioPlaying={false}
              />
            }
          />
          <Route
            path="/works"
            element={<WorksPage onSelectProject={handleSelectProject} />}
          />
          <Route
            path="/about"
            element={<AboutPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/audio"
            element={
              <AudioPage
                currentTrackIndex={currentTrackIndex}
                onTrackChange={handleTrackChange}
              />
            }
          />
          <Route
            path="/playground"
            element={<PlaygroundPage onOpenContact={handleOpenContact} />}
          />
          <Route
            path="/contact"
            element={
              <HomePage
                onSelectProject={handleSelectProject}
                onOpenContact={handleOpenContact}
                onPlayTrack={handleTrackChange}
                currentTrackIndex={currentTrackIndex}
                isAudioPlaying={false}
              />
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav onOpenContact={handleOpenContact} />

      {/* Interactive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        projects={projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={handleSelectProject}
      />

      {/* Contact & Dispatch Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  )
}
