import 'styles/central.scss';
import ReactDOM from 'react-dom/client';

import DesktopNavigation from 'components/03-molecules/desktop-navigation/desktop-navigation';
import Hero from 'components/03-molecules/hero/hero';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <div>
        <DesktopNavigation />
        <Hero />
    </div>
)