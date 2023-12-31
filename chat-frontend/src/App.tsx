import { Link, BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/login';
import Activity from './component/Activity';
import Register from './component/register';
import { ActivitySocketProvider } from './context/socket.context';
import { Logout } from './component/logout';
import { Queue } from './component/queue';
import { Chat } from './component/chat';

const App = () => {
  return (
    <BrowserRouter>
      <ActivitySocketProvider>
        <Link to="/"> [Home] </Link>
        <Link to="/login"> [Login] </Link>
        <Link to="/register"> [Register] </Link>
        <Link to="/logout"> [logout] </Link>
        <hr />
        <main>
          <Routes> 
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/"
              element={
                <>
                  <Activity />
                  <Queue />
                </>
              }
            />
            <Route path="/chat/:id" element={<Chat />} />
          </Routes>
        </main>
      </ActivitySocketProvider>
    </BrowserRouter>
  );
};

export default App;
