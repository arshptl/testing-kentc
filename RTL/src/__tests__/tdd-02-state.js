import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import { Editor } from '../post-editor-02-state';


test('renders a component with title, content, tags and a submit button', () => {
  const { getByLabelText, getByText } = render(<Editor />);
  getByLabelText(/Title/i)
  getByLabelText(/Content/i)
  getByLabelText(/Tags/i)
  const thatButton = getByText(/Submit/i)
  fireEvent.click(thatButton)

  expect(thatButton).toBeDisabled()
})