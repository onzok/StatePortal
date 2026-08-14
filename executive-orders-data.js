const EXECUTIVE_ORDERS_DATA = [
  {
    number: 'EO YYYY-002',
    title: 'Executive Order Title 2',
    date: 'Month Day, Year',
    governor: 'Example Governor',
    administration: '2nd Example Administration',
    color: '#e7ddd4',
    status: 'ACTIVE',
    provisions: [
      { sec: '§ 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      { sec: '§ 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ],
    signature: 'Signed by: Governor Example, Month Day, Year'
  },

  {
    number: 'EO YYYY-000',
    title: 'Executive Order Title 1',
    date: 'Month Day, Year',
    governor: 'Example Governor',
    administration: '1st Example Administration',
    color: '#e7ddd4',
    status: 'RETRACTED',
    provisions: [
      { sec: '§ 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
      { sec: '§ 2', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    ],
    signature: 'Signed by: Governor Example, Month Day, Year'
  },
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXECUTIVE_ORDERS_DATA;
}