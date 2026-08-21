import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { HomePage } from './pages/HomePage'
import { StubPage } from './pages/StubPage'
import {
  EducationPage,
  FarmersPage,
  PanchayatPage,
  RoadsPage,
} from './pages/ThemePages'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="farmers" element={<FarmersPage />} />
          <Route path="roads" element={<RoadsPage />} />
          <Route path="panchayat" element={<PanchayatPage />} />
          <Route path="about" element={<StubPage pageKey="about" />} />
          <Route path="works" element={<StubPage pageKey="works" />} />
          <Route path="schemes" element={<StubPage pageKey="schemes" />} />
          <Route path="gallery" element={<StubPage pageKey="gallery" />} />
          <Route path="news" element={<StubPage pageKey="news" />} />
          <Route path="contact" element={<StubPage pageKey="contact" />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
