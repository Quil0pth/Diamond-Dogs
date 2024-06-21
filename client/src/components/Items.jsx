import { Component } from 'react';

class Items extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount(){
        fetch('api/items')
        .then(res => {res.json()
            console.log(res)
        })
        .then(items=>{
            console.log(items)
            this.setState({items: items})
        }).catch(rejected => {
            console.log(rejected);
        });
    }
    
    render() {
        return(
            <div className='items'>
                <h1 className='items-head'>Art</h1>
                    {
                        this.state.items.map(item =>
                            <div>
                                <h3>Name: {item.n}</h3> 
                                <br/>     Price: {item.p}
                            </div>
                        )
                    }
            </div>
        )
    }
}

export default Items;