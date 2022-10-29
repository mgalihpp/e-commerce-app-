import React from 'react';
import '../style/App.css';
import sepatu1 from '../shoes-img/sepatu-1.jpg';
import sepatu2 from '../shoes-img/sepatu-2.jpg';

const Product = () => {
    return (
        <div id="produk-1" className="section-p1">
            <h2>
                My Product
            </h2>
            <p>
                Male
            </p>
            <div className="produk">
                <div className="produk-box">
                    <img
                    src={sepatu1}
                    alt="shoes">
                    </img>
                    <div className='isi'>
                        <span>
                           Lifestyle
                        </span>
                        <h5>
                           NAME SHOES
                        </h5>
                       <div className="star">
                        
                       </div>
                        <h4>
                            PRICE
                        </h4>
                   </div>
               </div>
                <div className="produk-box">
                    <img
                    src={sepatu2}
                    alt="">
                    </img>
                    <div className='isi'>
                        <span>
                           Lifestyle
                        </span>
                        <h5>
                           NAME SHOES
                        </h5>
                       <div className="star">
                        
                       </div>
                        <h4>
                            PRICE
                        </h4>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Product