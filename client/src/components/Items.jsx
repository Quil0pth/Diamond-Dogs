import { useState, useEffect } from 'react';

function Items() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const link = "http://localhost:5000/";

        const fetchItems = async () => {
            try{
                const response = await fetch(link + 'api/items');
                const json = await response.json();
                console.log(json);
                setItems(json);
            } catch (error) {
                console.log("Error", error);
            }
        }
        fetchItems();
    }, []);

    useEffect(()=>{
        console.log(items);
    }, [items])

    return ( 
        <div className='item-box '>
            <h1 className='items-head'>Items</h1>
            {
                items.map(item =>{
                    if(item){
                        return(
                            <div className='text-3xl'>
                                <h3 >Name: {item.n}</h3> 
                                <br/>Price: {item.p}
                            </div>
                        )  
                    }else{ return( <div className='font-mono text-center w-screen'> Nothing to display! </div>)}
                })
            }

        </div>
     );
}

export default Items;

