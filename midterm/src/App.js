import logo from './logo.svg';
import './App.css';
import Midterm from './components/Midterm'
import UserStatus from './components/UserSatus';
import UserListItem from './components/UserListItem';
function App() {
  return (
    <div>
      {/* <Midterm /> */}
      <UserStatus />
      <UserListItem />
    </div>
  );
}

export default App;
