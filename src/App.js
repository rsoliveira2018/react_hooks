import React, { useState } from 'react'
import FunctionContextComponent from './FunctionContextComponent'
// import ClassContextComponent from './ClassContextComponent'
import { ThemeProvider } from './ThemeContext'

export default function App(){
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  )
}