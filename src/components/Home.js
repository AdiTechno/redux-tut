import React from 'react'

function Home(props) {
    console.warn("Home",props.data.cardItems?.length)
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPNM4q9RjrCiYgsHFNU5jIISpn6sOuadUqJw&usqp=CAU"/>
            </div>
            <h1>Home Component</h1>
            <div className="card-wrapper">
                <div className="img-wrapper item">
                    <img src="https://assetscdn1.paytm.com/images/catalog/product/M/MO/MOBOPPO-A12-4-GAPNI9930205C57B5F/0.png"/>
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price : $1000.
                    </span>
                </div>
               
                <div className="btn-wrapper item">
                    <button onClick={()=>
                    props.addToCartHandler({Price : 1000, Name:'Moto'})
                }>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home;