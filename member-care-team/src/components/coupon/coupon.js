import React from 'react';
import Header from '../Header/header';
import './coupon.css';

const Coupon = () => {

    const couponArray = [
        { id: 1, testName: 'abc', testDetails: 'xyz', testPrice: 2000, discount: 10 },
        { id: 2, testName: 'abc1', testDetails: 'xyz', testPrice: 1000, discount: 10 },
        { id: 3, testName: 'abc2', testDetails: 'xyz', testPrice: 3000, discount: 10 },
        { id: 4, testName: 'abc3', testDetails: 'xyz', testPrice: 1500, discount: 10 },
        { id: 5, testName: 'abc4', testDetails: 'xyz', testPrice: 500, discount: 10 },
    ]

    const handleRedeem = () => {
        alert('Coupon is redeem')
    }

    return (
        <>
            <Header />
            <div className='coupon-layout'>
                <div className='coupon-title'><p><strong>Coupons</strong></p></div>
                <div className='coupon-div'>
                    {couponArray.map((item, index) => (
                        <div className='coupon-content-div'>
                            <div className='coupon-content-title'><p><strong>{item.testName}</strong></p></div>
                            <div className='coupon-content-text'><p> <strong>Test Details: </strong> {item.testDetails}</p></div>
                            <div className='coupon-content-price'><p><strong>Price:</strong> <span> <del>&#x20B9;{item.testPrice}</del></span></p></div>
                            <div className='coupon-content-discount'><p><strong>Discount: </strong><span>{item.discount}%</span></p></div>
                            <div className='coupon-content-after-discount'><p><strong>After Discount:</strong> <span> &#x20B9; {(item.testPrice) - (item.testPrice*item.discount/100)}</span></p></div>
                            <div className='coupon-content-button'><button className='btn btn-secondary' onClick={handleRedeem}>Redeem</button></div>
                        </div>
                    ))}
                        
                </div>
            </div>

        </>
    )
}

export default Coupon;