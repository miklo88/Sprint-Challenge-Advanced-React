import React from 'react';
import App from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './components/Navbar';
// import PlayerList from './components/PlayerList';
// import Player from './components/Player';


afterEach(rtl.cleanup);

it('Does app render nav h1?', async () => {
  const wrapper = rtl.render(<App />)
  const element = wrapper.getByText(`Women's World Cup Players`)
  expect(element).toBeVisible()
})

test('Can I render a navbar', async () => {
  const wrapper = rtl.render(<Navbar />);
  expect(wrapper.queryAllByText(/text/i));
});





