import PageTabs from './Tabs';
import Admin from './Admin';
import UsersList from './components/admin/UsersList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<PageTabs />} />
                        <Route path="admin">
                            <Route index element={<Admin />} />
                            <Route path="users" element={<UsersList />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
