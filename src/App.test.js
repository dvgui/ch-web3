import { render, screen } from '@testing-library/react'
import App from './App'

test('renders products title', () => {
    render(<App />)
    const linkElement = screen.getByText(/products/i)
    expect(linkElement).toBeInTheDocument()
})
