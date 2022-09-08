import Highlight from "components/01-atoms/highlight/highlight";
import ListItem from "components/01-atoms/list-item/list-item";

const Process = () => {

	return (
		<div className="process section">
			<div className="process__inner section__inner">
				<div className="process__article article">
						<p className="article__heading heading">
							<Highlight className="heading__top" color="red" borderColor="white">when</Highlight>
							<Highlight className="heading__sub" color="red" borderColor="white">buy</Highlight>
						</p>
						<ul className="article__list">
							<ListItem className="list__item list-item--white">Automatic autostaking: 60 days locked after buy</ListItem>
							<ListItem className="list__item list-item--white">Insane ~1.000.000% APY : see your tokens go up in your wallet in real time</ListItem>
							<ListItem className="list__item list-item--white">You can only buy the token on Wednesday for free</ListItem>
							<ListItem className="list__item list-item--white">All the other days there is a 10% project tax on buying the token</ListItem>
						</ul>
				</div>
				<div className="process__article article">
						<p className="article__heading heading">
							<Highlight className="heading__top" color="red" borderColor="white">when</Highlight>
							<Highlight className="heading__sub" color="red" borderColor="white">sell</Highlight>
						</p>
						<ul className="article__list">
							<ListItem className="list__item list-item--white">Interest released 60D after your first purchase</ListItem>
							<ListItem className="list__item list-item--white">There is a 10% project tax on selling the token</ListItem>
						</ul>
				</div>
			</div>
		</div>
	)
};

export default Process;