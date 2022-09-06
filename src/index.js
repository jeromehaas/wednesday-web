import 'styles/central.scss';
import ReactDOM from 'react-dom/client';

import Anchor from 'components/01-atoms/anchor/anchor';
import Button from 'components/01-atoms/button/button';
import Heading from 'components/01-atoms/heading/heading';
import Highlight from 'components/01-atoms/highlight/highlight';
import ListItem from 'components/01-atoms/list-item/list-item';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <div>
        <Anchor>Anchor</Anchor><br />
        <Button>Button</Button>
        <Heading type="h1">Heading H1</Heading>
        <Heading type="h1">A word that is <Highlight>transparent</Highlight> looks quite nice!</Heading>
        <ListItem>This is a list item</ListItem>
    </div>
)