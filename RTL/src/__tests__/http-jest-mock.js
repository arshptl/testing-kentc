// import * as React from 'react'
// import {render, screen, waitFor} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import {loadGreeting as mockLoadGreeting} from '../api'
// import {GreetingLoader} from '../greeting-loader-01-mocking'

// jest.mock('../api')

// test('loads greetings on click', async () => {
//   const testGreeting = 'TEST_GREETING'
//   mockLoadGreeting.mockResolvedValueOnce({data: {greeting: testGreeting}})
//   render(<GreetingLoader />)
//   const nameInput = screen.getByLabelText(/name/i)
//   const loadButton = screen.getByText(/load/i)
//   userEvent.type(nameInput, 'Mary')
//   userEvent.click(loadButton)
//   expect(mockLoadGreeting).toHaveBeenCalledWith('Mary')
//   expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
//   await waitFor(() =>
//     expect(screen.getByLabelText(/greeting/i)).toHaveTextContent(testGreeting),
//   )
// })

import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { GreetingLoader } from 'greeting-loader-01-mocking';
import { loadGreeting as mockLoadGreeting } from '../api'

jest.mock('../api');

test('loads greetings on click', () => {
  const testGreeting = 'TEST_GREETING'
  mockLoadGreeting.mockResolvedValueOnce({data: {greeting: 'TEST_GREETING'}})
  const { getByLabelText, getByText } = render(<GreetingLoader />)
  const nameInput = getByLabelText(/name/i)
  const loadButton = getByText(/load/i);
  nameInput.value = 'Mary'
  fireEvent.click(loadButton)
  expect(mockLoadGreeting).toHaveBeenCalledWith('Mary')
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
  waitFor(() => expect(getByLabelText(/greeting/i).toHaveTextContent(testGreeting)))
})