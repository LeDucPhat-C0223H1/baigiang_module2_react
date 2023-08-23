import {useContext} from 'react'
import { ThemeContext } from './ThemeProvider'
import Paragraph from './paragraph'
// Context
// comp A => Comp B => Comp C
// Theme: Dark / Ligght

// 1.create Context
// 2.Provider
// 3.Consumer Component
export default function Context() {
    const context = useContext(ThemeContext)
  return (
    <div style={{ padding: 20}}>
        <button onClick={context.toggleTheme}>Toggle Theme</button>
        <Paragraph/>
    </div>
  )
}
