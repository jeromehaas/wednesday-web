import { useEffect, useState } from 'react';

const MetamaskStatus = ({ className }) => {

    const [account, setAccount] = useState(null);
		const ethereum = window.ethereum;
 
		const connectWallet = async () => {
			if (!ethereum) return;
			const accounts = await ethereum.request({ method: 'eth_requestAccounts'});
			const account = accounts[0];
			setAccount(account);
		};

		const checkConnected = async () => {
			if (!ethereum) return;
			const accounts = await ethereum.request({ method: 'eth_accounts'});
			const account = accounts[0]
			account ? setAccount(account) : setAccount(null);
		};
  
		useEffect(() => {
			if (!ethereum) return;
			checkConnected();
			window.ethereum.on('accountsChanged', checkConnected);
		}, []);
		
    return (
        <a className={`${ className ? className : '' } metamask-status ${ account ? 'metamask-status--connected' : 'metamask-status--disconnected' } metamask-status`} onClick={ connectWallet }>
            <i className="metamask-status__icon"></i>
            { account ? 'Connected' : 'Not Connected' }
        </a>
    );

};

export default MetamaskStatus;