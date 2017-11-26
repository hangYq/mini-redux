import React, { Component } from 'react';
//import { add, remove } from './index.redux';
import { connect } from 'react-redux';
import { add, remove, addAsync } from './index.redux';




class App extends Component {
	render(){
		/*const store = this.props.store;
		const add = this.props.add;
		const remove = this.props.remove;
		const addAsync = this.props.addAsync;
		const num = store.getState();*/
		//const { num, add, remove, addAsync } = this.props;
		const num = this.props.num;
		const add = this.props.add;
		const remove = this.props.remove;
		const addAsync = this.props.addAsync;
		return(
			<div>
				<p>{ `数值为：${num}` }</p>
				<button onClick={ add }>加1</button>
				<button onClick={ remove }>减1</button>
				<button onClick={ addAsync }>异步2秒后加1</button>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		num : state
	}
}

const mapDispatchToProps = { add, remove, addAsync };


export default connect(mapStateToProps,mapDispatchToProps)(App);;
