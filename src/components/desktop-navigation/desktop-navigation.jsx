const DesktopNavigation = () => {
    
    return (
        <div className="desktop-navigation">

            <div className="desktop-navigation__inner">


            <div className="desktop-navigation__logo logo">
                $WED 
            </div>

            <div className="desktop-navigation__links links">
                <a className="links__item anchor" href="#">About</a>
                <a className="links__item anchor" href="#">Experiment</a>
                <a className="links__item anchor" href="#">Roadmap</a>
                <a className="links__item anchor" href="#">Taxes</a>
                <a className="links__item anchor" href="#">Tokenomics</a>
            </div>

            <div className="desktop-navigation__metamask metamask">
                Metamask
            </div>

            </div>

        </div>
    );

};

export default DesktopNavigation;