import React, { Component } from "react";
import './App.css';
import Header from './components/Header'
import './index.css'

class App extends Component{
    constructor(props) {
        super(props);
   
        this.state = {
          Count:0,
            name:'',
            products:[]
        };
    }
   componentDidMount() {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                   products: json.products
                });
            })
    }
              render(){
          return(
            <div>
              <Header/>
          <div className="d-flex flex-wrap" >
            {
                this.state.products.map((a,i)=>{
                return(
                  <div className="Card m-3">
                    <img className="Card-img-top" src={a.thumbnail} alt='Card image cap'/>
                    <div className="Card-body">
                      <h5>Price:-{a.price}</h5>
                      <p className="Card-text">{a.description}</p>
                      <button className="btn-btn-primary">AddToCart</button>
                      </div>
                      </div>
                      )})
                }
                </div>
                </div>
          )
              }
            }
      export default App;








