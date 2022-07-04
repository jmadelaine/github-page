/** @jsxImportSource @emotion/react */
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import SomethingWentWrongPage from 'information_page/SomethingWentWrongPage'

const TsGuardianPage = lazy(async () => import('ts_guardian_page/Page'))

const App = () => (
  <BrowserRouter>
    <Suspense fallback={null}>
      <Routing />
    </Suspense>
  </BrowserRouter>
)

export default App

const Routing = () => {
  return (
    <Routes>
      <Route path="/ts-guardian/*" element={<TsGuardianPage />} />
      <Route path="/something-went-wrong" element={<SomethingWentWrongPage />} />
      <Route path="/" element={<>{'root'}</>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
