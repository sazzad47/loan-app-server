import PageTabs from './Tabs';
import Admin from './Admin';
import UsersList from './components/admin/UsersList';
import DisputesPage from './components/admin/DisputesPage';
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
                            <Route path='disputes' element={<DisputesPage />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
