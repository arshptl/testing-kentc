import { getFormattedValue } from '../utils';

test('formates the value', () => {
    expect(getFormattedValue('1234.0')).toBe('1,234.0');
})

// console.log(window);