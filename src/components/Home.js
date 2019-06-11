import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from './actions/cartActions'
import Currency from 'react-currency-formatter'




 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} style={{width: 200, height: 200}} alt={item.title}/>
                            
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons"  style={{ backgroundColor: '#1396c4'}} >add</i></span>
                        </div>

                        <div className="card-content" >
                        <b><span className="card-title" className='container'>{item.title}</span> </b> 
                        <p>Price</p>
                        
                        <Currency quantity ={item.price} currency='NZD'/> 
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Items</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)