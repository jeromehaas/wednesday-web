import 'styles/central.scss';
import ReactDOM from 'react-dom/client';

import Anchor from 'components/01-atoms/anchor/anchor';
import Button from 'components/01-atoms/button/button';
import Heading from 'components/01-atoms/heading/heading';
import Highlight from 'components/01-atoms/highlight/highlight';
import ListItem from 'components/01-atoms/list-item/list-item';
import DesktopNavigation from 'components/03-molecules/desktop-navigation/desktop-navigation';
import MetamaskStatus from 'components/01-atoms/metamask-status/metamask-status';
import Hero from 'components/03-molecules/hero/hero';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <div>
        <DesktopNavigation />
        <Hero />
        {/* <Anchor>Anchor</Anchor><br />
        <Button>Button</Button>
        <Heading type="h1">Heading H1</Heading>
        <Heading type="h1">A word that is <Highlight>transparent</Highlight> looks quite nice!</Heading>
        <ListItem>This is a list item</ListItem>
        <MetamaskStatus /> */}
    </div>
)