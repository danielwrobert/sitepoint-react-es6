import React from 'react'
import ReactDOM from 'react-dom'
import ReadingTime from '../src/reading-time'

class ReactReadingTime extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
			text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
		};
	}

	updateText( ev ) {
		this.setState( { text: ev.target.value } );
	}

	render() {
		return (
			<div className='container' style={{ marginTop: '50px' }}>
				<div className='col-lg-8 col-lg-offset-2 form-group'>
				<textarea
					value={ this.state.text }
					onChange={ ( ev ) => this.updateText( ev ) }
					className='form-control'
					style={{ height: '500px', resize: 'none' }}>
				</textarea>
				</div>
				<ReadingTime data-weiner='tucker' textColor='green' text={ this.state.text } className='col-lg-2 well' />
			</div>
		);
	}
}

ReactDOM.render( <ReactReadingTime />, document.getElementById( 'react' ) );
