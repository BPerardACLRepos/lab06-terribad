import React from 'react';
import request from 'superagent';
import { Link } from 'react-router-dom';

export default class SearchPage extends React.Component {

    state = {
        quotesArray: [],
    }

    componentDidMount = async () => {
        await this.fetchQuotes();
    }

    fetchQuotes = async () => {

        const response = await request.get(`https://lab06-sql-express.herokuapp.com/postnobills/`);

        this.setState({
            quotesArray: response.body.postNoBills,
        });
    }

    render() {
        return (
            <div className="body">
                {this.state.quotesArray.map(quote =>
                    <Link to={`/quotes/${quote.mood}`} key={quote.quote}>
                        <h3>{quote.mood}</h3>
                        <p>{quote.quote}</p>
                    </Link>
                )}
            </div>
        );
    }
}