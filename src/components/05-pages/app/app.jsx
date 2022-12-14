import DesktopNavigation from 'components/03-molecules/desktop-navigation/desktop-navigation';
import MobileNavigation from 'components/03-molecules/mobile-navigation/mobile-navigation';
import Hero from 'components/03-molecules/hero/hero';
import Intro from 'components/03-molecules/intro/intro';
import TelegramTeaser from 'components/03-molecules/telegram-teaser/telegram-teaser';
import Process from 'components/03-molecules/process/process';
import TokenTeaser from 'components/03-molecules/token-teaser/token-teaser';
import LaunchTeaser from 'components/03-molecules/launch-teaser/launch-teaser';
import LaunchCountdown from 'components/03-molecules/launch-countdown/launch-countdown';
import StakingCountdown from 'components/03-molecules/staking-countdown/staking-countdown';
import Cursor from 'components/01-atoms/cursor/cursor';
import { Fragment } from 'react';

const App = () => {

    return (
        <Fragment>
            <DesktopNavigation />
            <MobileNavigation />
            <Hero />
            <Intro />
            <TelegramTeaser />
            <Process />
            <TokenTeaser />
            <LaunchCountdown />
            <LaunchTeaser />
            <StakingCountdown />
            <Cursor />
        </Fragment>
    );

};

export default App;
