import React, {Component} from 'react'

class CryptoIcons extends Component{

    getCryptoIconUrl () {
        if (this.props.id){
            return `https://s2.coinmarketcap.com/static/img/coins/16x16/${this.props.id}.png`
        } else {
            return ''
        }
    }

    render () {
        return (
            <section>
                <img src={this.getCryptoIconUrl()} />
                <h3>{this.props.price}</h3>
            </section>
        )
    }

}

export default CryptoIcons