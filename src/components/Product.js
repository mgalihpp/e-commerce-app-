import React from 'react';
import '../style/App.css';

import arrowBtn from '../img/arrow.png';
import sepatu1 from '../shoes-img/sepatu-1.jpg';
import sepatu2 from '../shoes-img/sepatu-2.jpg';
import sepatu3 from '../shoes-img/sepatu-3.jpg';
import sepatu4 from '../shoes-img/sepatu-4.jpg';
import sepatu5 from '../shoes-img/sepatu-5.jpg';
import sepatu6 from '../shoes-img/sepatu-6.jpg';
import sepatu7 from '../shoes-img/sepatu-7.jpg';
import sepatu8 from '../shoes-img/sepatu-8.jpg';
import sepatu9 from '../shoes-img/sepatu-9.jpg';
/*import sepatu10 from '../shoes-img/sepatu-10.jpg';
import sepatu11 from '../shoes-img/sepatu-11.jpg';
import sepatu12 from '../shoes-img/sepatu-12.jpg';
import sepatu13 from '../shoes-img/sepatu-13.jpg';
import sepatu14 from '../shoes-img/sepatu-14.jpg';
import sepatu15 from '../shoes-img/sepatu-15.jpg';
import sepatu16 from '../shoes-img/sepatu-16.jpg';
import sepatu17 from '../shoes-img/sepatu-17.jpg';
import sepatu18 from '../shoes-img/sepatu-18.jpg';
import sepatu19 from '../shoes-img/sepatu-19.jpg';
import sepatu20 from '../shoes-img/sepatu-20.jpg';
import sepatu21 from '../shoes-img/sepatu-21.jpg';
import sepatu22 from '../shoes-img/sepatu-22.jpg';
import sepatu23 from '../shoes-img/sepatu-23.jpg';
import sepatu24 from '../shoes-img/sepatu-24.jpg';*/

const style= {
    'life': 'Lifestyle',
    'train': 'Training',
    'bask': 'Basket',
    'run': 'Running'
}
const name= {
    's1': 'PHARRELL WILLIAMS HU NMD CHEETAH SHOES',
    's2': 'SEPATU NMD_V3',
    's3': 'SEPATU PUREBOOST GO',
    's4': 'SEPATU DROPSET TRAINER',
    's5': 'SEPATU NMD_V5',
    's6': 'SEPATU ADIDAS GRAND COURT X LEGO® 2.0',
    's7': 'FORUM 84 LOW AEC SHOES',
    's8': 'SEPATU FORUM 84',
    's9': '',
    's10': '',
}
const price= {
    'jt1': 'Rp. 1,000,000',
    'jt11': 'Rp.1,100,000',
    'jt2': 'Rp. 2,000,000',
    'jt23': 'Rp. 2,300,000',
    'jt26': 'Rp. 2,600,000',
    'jt4': 'Rp. 4,000,000',
    'jt5': 'Rp. 5,000,000',
}

const Product = () => {
    return (
        <div id="produk-1" className="section-p1">
            <h2>
                My Product
            </h2>
            <p>
                Male
            </p>
        <button className="pre-btn">
        <img 
        src={arrowBtn} 
        alt="btn" />
        </button>
        
        <button className="nxt-btn">
        <img 
        src={arrowBtn} 
        alt="btn" />
        </button>
            
            <div className="produk">
                <div className="produk-box">
                    <img
                    src={sepatu1}
                    alt="shoes">
                    </img>
                    <div className='isi'>
                        <span>
                           {style.life}
                        </span>
                        <h5>
                           {name.s1}
                        </h5>
                       <div className="star">
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                       </div>
                        <h4>
                           {price.jt4}
                        </h4>
                   </div>
               </div>
                <div className="produk-box">
                    <img
                    src={sepatu2}
                    alt="shoes">
                    </img>
                    <div className='isi'>
                        <span>
                           {style.life}
                        </span>
                        <h5>
                           {name.s2}
                        </h5>
                       <div className="star">
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                       </div>
                        <h4>
                           {price.jt26}
                        </h4>
                   </div>
               </div>
                <div className="produk-box">
                    <img
                    src={sepatu3}
                    alt="shoes">
                    </img>
                    <div className='isi'>
                        <span>
                            {style.life}
                        </span>
                        <h5>
                            {name.s3}
                        </h5>
                       <div className="star">
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                       </div>
                            <h4>
                                {price.jt2}
                            </h4>
                   </div>
               </div>
                <div className="produk-box">
                    <img
                    src={sepatu4}
                    alt="shoes">
                    </img>
                    <div className='isi'>
                        <span>
                           {style.life}
                        </span>
                        <h5>
                           {name.s4}
                        </h5>
                       <div className="star">
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                       </div>
                        <h4>
                           {price.jt2}
                        </h4>
                   </div>
               </div>
                <div className="produk-box">
                    <img
                    src={sepatu5}
                    alt="shoes">
                    </img>
                    <div className='isi'>
                        <span>
                           {style.life}
                        </span>
                        <h5>
                           {name.s5}
                        </h5>
                       <div className="star">
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                       </div>
                        <h4>
                           {price.jt23}
                        </h4>
                   </div>
               </div>
                <div className="produk-box">
                    <img
                    src={sepatu6}
                    alt="shoes">
                    </img>
                    <div className='isi'>
                        <span>
                           {style.life}
                        </span>
                        <h5>
                           {name.s6}
                        </h5>
                       <div className="star">
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                       </div>
                        <h4>
                           {price.jt11}
                        </h4>
                   </div>
               </div>
                <div className="produk-box">
                    <img
                    src={sepatu7}
                    alt="shoes">
                    </img>
                    <div className='isi'>
                        <span>
                           {style.life}
                        </span>
                        <h5>
                           {name.s7}
                        </h5>
                       <div className="star">
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                       </div>
                        <h4>
                           {price.jt23}
                        </h4>
                   </div>
               </div>
                <div className="produk-box">
                    <img
                    src={sepatu8}
                    alt="shoes">
                    </img>
                    <div className='isi'>
                        <span>
                           {style.life}
                        </span>
                        <h5>
                           {name.s8}
                        </h5>
                       <div className="star">
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                       </div>
                        <h4>
                           {price.jt2}
                        </h4>
                   </div>
               </div>
                <div className="produk-box">
                    <img
                    src={sepatu9}
                    alt="shoes">
                    </img>
                    <div className='isi'>
                        <span>
                           {style.life}
                        </span>
                        <h5>
                           {name.s9}
                        </h5>
                       <div className="star">
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                       </div>
                        <h4>
                           {price.jt11}
                        </h4>
                   </div>
               </div>
            </div>
        </div>
    )
}

export default Product