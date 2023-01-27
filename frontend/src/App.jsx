import PageTabs from './Tabs';
import Admin from './Admin';
import UsersList from './components/admin/UsersList';
import DisputesPage from './components/admin/DisputesPage';
import AdminLogin from './components/admin/AdminLogin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<PageTabs />} />
                        <Route path="/admin" element={<PrivateRoute />}>
                            <Route path="/admin">
                                <Route index element={<Admin />} />
                                <Route path="users" element={<UsersList />} />
                                <Route
                                    path="disputes"
                                    element={<DisputesPage />}
                                />
                            </Route>
                        </Route>
                            <Route path="admin/login" element={<AdminLogin />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
