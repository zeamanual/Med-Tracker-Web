import React from 'react';
import { render } from '@testing-library/react';
import Fill from '../../pages/FillInfo';

// describe('Fill component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Fill />);
    expect(container).toBeDefined();
  });
  //   it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });
  //   it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });
  //   it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });
  //   it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });
  //   it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });
  //   it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });  it('renders without crashing', () => {
  //   const { container } = render(<Fill />);
  //   expect(container).toBeDefined();
  // });

  it('displays the correct text', () => {
    const { getByText } = render(<Fill />);
    expect(getByText('Fill Your Info')).toBeInTheDocument();
    expect(getByText('Your medical information is coded according to World Health Organizations global standards (ICD-10, ATC) to ensure that your condition and requirement is understood by health professionals and pharmaceutical personnel all over the Skip Tour')).toBeInTheDocument();
    expect(getByText('Skip Tour')).toBeInTheDocument();
  });

  it('displays the logo', () => {
    const { getByAltText } = render(<Fill />);
    expect(getByAltText('WMC logo')).toBeInTheDocument();
  });

  it('displays the image', () => {
    const { getByAltText } = render(<Fill />);
    expect(getByAltText('Fill Your Info image')).toBeInTheDocument();
  });
