/** @jsxImportSource @emotion/react */
import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route, Navigate, Link } from 'react-router-dom'
import SomethingWentWrongPage from 'information_page/SomethingWentWrongPage'

const TsGuardianPage = lazy(async () => import('ts_guardian_page/Page'))

const App = () => (
  <HashRouter>
    <Suspense fallback={null}>
      <Routing />
    </Suspense>
  </HashRouter>
)

export default App

const Routing = () => {
  return (
    <Routes>
      <Route path="/ts-guardian/*" element={<TsGuardianPage />} />
      <Route path="/something-went-wrong" element={<SomethingWentWrongPage />} />
      <Route
        path="/"
        element={
          <>
            {'hello'}
            <Link to="/ts-guardian/">{'ts-guardian'}</Link>
          </>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
