// import * as jestDOM from '@testing-library/jest-dom'
import { fireEvent, render, screen } from "@testing-library/react"
import React from 'react'
import Calculator from '../calculator'

// console.log(jestDOM);
// expect.extend(jestDOM)

test('the clear button switches from AC to C when there is an entry', () => {
    // the two ways to get the button and do the assertions
    const { getByText } = render(<Calculator />)
    const clearButton = getByText('AC')

    fireEvent.click(getByText(/3/))
    expect(clearButton.textContent).toBe('C')

    fireEvent.click(clearButton)
    expect(clearButton.textContent).toBe('AC')
    // const anotherRefOfClearButton = screen.getByRole('button', {name: /AC/i})
    // console.log(anotherRefOfClearButton)
})