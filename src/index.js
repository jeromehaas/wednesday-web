import 'styles/central.scss';
import ReactDOM from 'react-dom/client';
import App from 'components/05-pages/app/app';
import Login from 'components/05-pages/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoutes from 'utils/private-routes';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route element={<PrivateRoutes />}>
                <Route path="/" exact element={ <App /> } />
            </Route>
            <Route path="/login" exact element={ <Login /> } />
        </Routes>
    </BrowserRouter>
);