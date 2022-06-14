import React from 'react'
import { render } from '@testing-library/react'
// import AutoScalingText from '../shared/auto-scaling-text'
import AutoScalingText from '../auto-scaling-text';

test('renders', () => {
    const { debug } = render(<AutoScalingText />)
    debug()
})
