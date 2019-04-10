// // Test away!
import React from 'react';
import * as rtl from 'react-testing-library';
import "jest-dom/extend-expect";
import ren from 'react-test-renderer';

import Display from './Display'

afterEach(rtl.cleanup)

describe('Display Component', () => {
  it('matches snapshot', () => {
    const tree = ren.create(<Display />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  // - displays if gate is open/closed and if it is locked/unlocked
  describe('default', () => {
    it('is both unlocked and open on render', () => {
      const tree = rtl.render(<Display />)
      expect(tree.getByText(/unlocked/i)).toBeTruthy();
      expect(tree.getByText(/open/i)).toBeTruthy();
    })
  })
  // - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
  // - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
  describe('displays state', () => {
    it('displays closed when closed', () => {
      const tree = rtl.render(<Display closed={true} />)
      expect(tree.getByText(/closed/i)).toBeTruthy()
    })
    it('displays open when open', () => {
      const tree = rtl.render(<Display closed={false} />)
      expect(tree.getByText(/open/i)).toBeTruthy()
    })
    it('displays locked when locked', () => {
      const tree = rtl.render(<Display locked={true} />)
      expect(tree.getByText(/locked/i)).toBeTruthy()
    })
    it('displays unlocked when unlocked', () => {
      const tree = rtl.render(<Display locked={false} />)
      expect(tree.getByText(/unlocked/i)).toBeTruthy()
    })
  })

  // - when `locked` or `closed` use the `red-led` class
  // - when `unlocked` or `open` use the `green-led` class
  describe('Uses the right classes', () => {
    it('uses red when closed', () => {
      const tree = rtl.render(<Display closed={true} />)
      expect(tree.getByText(/close/i)).toHaveClass('red-led')
    })
    it('uses green when open', () => {
      const tree = rtl.render(<Display closed={false} />)
      expect(tree.getByText(/open/i)).toHaveClass('green-led')
    })
    it('uses red when locked', () => {
      const tree = rtl.render(<Display locked={true} />)
      expect(tree.getByText(/locked/i)).toHaveClass('red-led')
    })
    it('uses green when unlocked', () => {
      const tree = rtl.render(<Display locked={false} />)
      expect(tree.getByText(/unlocked/i)).toHaveClass('green-led')
    })
  })
})