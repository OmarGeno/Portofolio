import { Route, Routes } from 'react-router-dom'
import TicTac from './Resume Body/Projects/Single Project/TicTac'

function ResumeRoutLinks() {
  return (
    <>
      <Routes>
        <Route path="/tic-tac" element={<TicTac />} />
        <Route path="/arcane" element={<TicTac />} />
        <Route path="/campus" element={<TicTac />} />
        <Route path="/expense" element={<TicTac />} />
      </Routes>
    </>
  )
}

export default ResumeRoutLinks
