import 'styles/central.scss';
import ReactDOM from 'react-dom/client';

import Anchor from 'components/01-atoms/anchor/anchor';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <div>
        <Anchor>Anchor</Anchor>
    </div>
)