import '@testing-library/jest-dom'
import * as React from 'react'
// import ReactDOM from 'react-dom'
// import { getQueriesForElement } from '@testing-library/dom'
import { render } from '@testing-library/react'
import { FavoriteNumber } from '../favorite-number'

// Reusable function to render the ui and get queries 
// This whole function is already been implemented into RTL
// and has a name as render function

// function render(ui) {
//   const container = document.createElement('div')
//   ReactDOM.render(ui, container)
//   const queries = getQueriesForElement(container)
//   return { container, ...queries }
// }

test('renders a number input with a label "Favorite Number"', () => {
  const { getByLabelText } = render(<FavoriteNumber />);
  const input = getByLabelText(/Favorite Number/i);
  expect(input).toHaveAttribute('type', 'number')
})
