class Board extends React.Component{
	constructor(props){
		super(props);

	}
	render() {
		return(
			<ul className="deck">
				<Card kind="diamond" modem="show" click={this.handler(0)} />
				<Card kind="paper-plane-o" modem="show" click={this.handler(1)} />
				<Card kind="anchor" modem="show" click={this.handler(2)} />
				<Card kind="bolt" modem="show" click={this.handler(3)} />
				<Card kind="cube" modem="show" click={this.handler(4)} />
				<Card kind="anchor" modem="show" click={this.handler(5)} />
				<Card kind="leaf" modem="show" click={this.handler(6)} />
				<Card kind="bicycle" modem="show" click={this.handler(7)} />
				<Card kind="diamond" modem="show" click={this.handler(8)} />
				<Card kind="bomb" modem="show" click={this.handler(9)} />
				<Card kind="leaf" modem="show" click={this.handler(10)} />
				<Card kind="bomb" modem="show" click={this.handler(11)} />
				<Card kind="bolt" modem="show" click={this.handler(12)} />
				<Card kind="bicycle" modem="show" click={this.handler(13)} />
				<Card kind="paper-plane-o" modem="show" click={this.handler(14)} />
				<Card kind="cube" modem="show" click={this.handler(15)} />
			</ul>
		)
	}
}
class Card extends React.Component{
	render(){
		return(
			<li className={ "card " + this.props.modem } >
        			<i className={ "fa fa-" + this.props.kind } onclick={this.props.click} ></i>
        		</li>
       		)
	}
	handle(i){
		const cards=document.querySelectorAll(".card");
		const elem=cards[i]
		const open=document.querySelectorAll(".show");
		if ( !elem.hasClass("match"){
			for(var e of open){
				if(!open[e].hasClass("match")){
					arr.push(e);
				}
			}
			switch(arr.length){
				case 0:
					elem.addClass("show anim");
					break;
				case 1:
					elem.addClass("show anim");
					if(arr[0]==arr[1]){
						arr[0].addClass("match");
						arr[0].addClass("match");

					}
					break;
				default:
					throw new Error();
					break;
			}
		}
	}
}
