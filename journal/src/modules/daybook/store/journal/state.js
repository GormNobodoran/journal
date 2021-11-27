export default () => ({
    isLoading: true,
    entries: [
        {
        id: new Date().getTime(),
        date: new Date().toDateString(),
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        picture: null,
    }, {
        id: new Date().getTime() + 1000,
        date: new Date().toDateString(),
        text: 'Lonsectetur adipiscing elit, sabore et dolore magna ad minitrudullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        picture: null,
    }, {
        id: new Date().getTime() + 2000,
        date: new Date().toDateString(),
        text: 'Lolore magna ad minitrudullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        picture: null,
    }
    ]
});