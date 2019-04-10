// Test away!
import React from 'react';
import * as rtl from 'react-testing-library';
import "jest-dom/extend-expect";
import ren from 'react-test-renderer';

import Controls from './Controls'

afterEach(rtl.cleanup)

describe('Controls Component', () => {
  it('matches snapshot', () => {
    const tree = ren.create(<Controls />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
  
  // - provide buttons to toggle the `closed` and `locked` states.
  // - buttons' text changes to reflect the state the door will be in if clicked
  describe('Buttons work correctly', () => {
    it('displays open when closed', () => {
      const tree = rtl.render(<Controls closed={true} />)
      expect(tree.getByText(/open/i)).toBeTruthy()
    })
    it('displays close when opened', () => {
      const tree = rtl.render(<Controls closed={false} />)
      expect(tree.getByText(/close/i)).toBeTruthy()
    })
    it('displays unlock when locked', () => {
      const tree = rtl.render(<Controls locked={true} />)
      expect(tree.getByText(/unlock/i)).toBeTruthy()
    })
    it('displays lock when unlocked', () => {
      const tree = rtl.render(<Controls locked={false} />)
      expect(tree.getByText(/lock/i)).toBeTruthy()
    })
  })
  // - the closed toggle button is disabled if the gate is closed
  // - the locked toggle button is disabled if the gate is open
  describe('Buttons get disabled', () => {
    it('', () => {
      const tree = rtl.render(<Controls closed={false} />)
      expect(tree.getByText("Lock Gate")).toBeDisabled()
    })
    it('', () => {
      const tree = rtl.render(<Controls locked={true} closed={true} />)
      expect(tree.getByText("Open Gate")).toBeDisabled()
    })
  })
})
