import React from "react";
function Home (props){
    console.warn("Home",props)
return(
    <div>
        <h1>Home Component</h1>
        <div className="cart-wrapper">
            <div className="img-wrapper item">
                <img src="https://www.apple.com/newsroom/images/product/iphone/standard/iphonex_front_homescreen_inline.jpg.large.jpg"/>
            </div>
            <div className="text-wrapper item">
                <span>I-Phone</span>
                <span>Price: $1000.00</span>
            </div>
            <div className="btn-wrapper item">
                 <button onClick={()=>props.addToCartHandler({Price: '$1000',name: 'IPHONE 11' })}>Add to cart</button>
            </div>
        </div>
    </div>
)
}
export default Home