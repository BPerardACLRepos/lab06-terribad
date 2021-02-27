import React from 'react';
import request from 'superagent';

export default class DetailsPage extends React.Component {

    state = {
        quotesArray: [],
    }

    componentDidMount = async () => {
        await this.fetchQuotes();
    }

    fetchQuotes = async () => {

        const response = await request.get(`https://lab06-sql-express.herokuapp.com/postnobills/${this.props.match.params.mood}`);

        this.setState({
            quotesArray: [response.body.guidance],
        });

        console.log(this.state.quotesArray)
    }

    render() {
        return (
            <div className="body">
                {this.state.quotesArray.map(quote =>
                    <div key={quote.quote}>
                        <h3>{quote.mood}</h3>
                        <p>{quote.quote}</p>
                    </div>
                )}
            </div>
        );
    }
}