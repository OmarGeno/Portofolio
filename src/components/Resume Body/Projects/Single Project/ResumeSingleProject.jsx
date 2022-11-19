import { Route } from 'react-router-dom'
import './ResumeSingleProject.css'
import TicTac from './TicTac'

function ResumeSingleProject() {
  return (
    <>
        <Route path='/tic-tac' element={<TicTac />} />
        <Route path='/arcane' element={<TicTac />} />
        <Route path='/campus' element={<TicTac />} />
        <Route path='/expense' element={<TicTac />} />
        <Route path='/cards-intro' element={<TicTac />} />
        <Route path='/valorant' element={<TicTac />} />
        <Route path='/coffee' element={<TicTac />} />
        <Route path='/angular-card' element={<TicTac />} />
    </>
  )
}

export default ResumeSingleProject
