import 'styles/central.scss';
import ReactDOM from 'react-dom/client';

import Anchor from 'components/01-atoms/anchor/anchor';
import Button from 'components/01-atoms/button/button';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <div>
        <Anchor>Anchor</Anchor><br />
        <Button>Button</Button>
    </div>
)