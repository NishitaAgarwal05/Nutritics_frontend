import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom'

import Contact from '../Contact';
test('should render contact component',()=>{
    render(<Contact/>);
    const contactElement=screen.getByTestId('contact-1');
    expect(contactElement).toBeInTheDocument();
})