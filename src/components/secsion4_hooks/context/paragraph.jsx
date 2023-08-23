import { ThemeContext } from './ThemeProvider';
import { useContext } from 'react'

export default function Paragraph() {
    const context = useContext(ThemeContext);
  return (
    <p className={context.theme}>
        ABCDEFGHIKLMNOPTUSABCDEFGHIKLMNOPTUSABCDEFGHIKLMNOPTUSABCDEFGHIKLMNOPTUS
    </p>
  )
}
