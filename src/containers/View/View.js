import { h, Component } from 'preact';

export default class View extends Component {

	render({ path }) {
		return (
			<div className="pd2">
				<h1>扫码: { path }</h1>
			</div>
		);
	}
}