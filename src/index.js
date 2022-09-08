import 'styles/central.scss';
import ReactDOM from 'react-dom/client';

import DesktopNavigation from 'components/03-molecules/desktop-navigation/desktop-navigation';
import Hero from 'components/03-molecules/hero/hero';
import Intro from 'components/03-molecules/intro/intro';
import TelegramTeaser from 'components/03-molecules/telegram-teaser/telegram-teaser';
import Process from 'components/03-molecules/process/process';
import TokenTeaser from 'components/03-molecules/token-teaser/token-teaser';
import LaunchCountdown from 'components/03-molecules/launch-countdown/launch-countdown';
import StakingCountdown from 'components/03-molecules/staking-countdown/staking-countdown';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <div>
        <DesktopNavigation />
        <Hero />
        <Intro />
        <TelegramTeaser />
				<Process />
				<TokenTeaser />
				<LaunchCountdown />
				<StakingCountdown />
    </div>
)