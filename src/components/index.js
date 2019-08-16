// separate file created to store all component exports
// This allows us to import all of the components in one line of code in App.js
// When you use an 'index' file name, you can use 'from' './components' and not specifiy the exact file


export { default as SearchBar } from './SearchBar';
export { default as VideoDetail } from './VideoDetail';
export { default as VideoList } from './VideoList';