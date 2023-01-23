import React from 'react';
import Navbar from './Navbar';

const menuItems = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Menu 1',
    path: '/',
    children: [
      {
        name: 'Sub Menu 1',
        path: '/',
      },
      {
        name: 'Sub Menu 2',
        path: '/',
      },
      {
        name: 'Sub Menu 3',
        path: '/',
      },
      {
        name: 'Sub Menu 4',
        children: [
          {
            name: 'Deep Menu 1',
            path: '/',
          },
          {
            name: 'Deep Menu 2',
            children: [
              {
                name: 'Sub Deep Menu 1',
                path: '/',
              },
            ],
          },
        ],
      },
    ]
  },
  {
    name: 'Menu 2',
    path: '/',
  },
  {
    name: 'Menu 3',
    children: [
      {
        name: 'Sub Menu 1',
        path: '/',
      },
      {
        name: 'Sub Menu 2',
        path: '/',
      },
      {
        name: 'Sub Menu 3',
        path: '/',
      },
      {
        name: 'Sub Menu 4',
        children: [
          {
            name: 'Deep Menu 1',
            path: '/',
          },
          {
            name: 'Deep Menu 2',
            children: [
              {
                name: 'Sub Deep Menu 1',
                path: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Menu 4',
    children: [],
    path: '/'
  },
  {
    name: 'Contact Us',
    path: '/',
  }
];

function App() {
  return (
    <div>
      <Navbar menuItems={menuItems} />
    </div>
  );
}

export default App;