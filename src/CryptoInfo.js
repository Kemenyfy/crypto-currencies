import React, { Component } from 'react';

class CryptoInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            price: ""
        };
    }

    componentDidMount() {
        setInterval(() => {
            const _url = "https://api.coinmarketcap.com/v2/ticker/?limit=20";
            fetch(_url).then(resp => resp.json()).then(cryptoData => {
                this.setState({coins: cryptoData.data[1].quotes.USD.price });
                const coins = Object.values(cryptoData.data)
                console.log(coins);
            }); 
        }, 10000);
    }

    render() {
        return (
            <div>
                The price is {this.state.price}
            </div>
        );        
    }    
}

export default CryptoInfo;
