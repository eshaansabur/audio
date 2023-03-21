import React from 'react';

const CoinPricing = () => {
    const handleCoinPricing = (event) => {
        event.preventDefault();
    }
    return (
        <div className='col-9 col-md-9 col-lg-9 mt-5 ms-4 text-start'>
        <h3>Present Coin Pricing</h3>
        <p>1 coin= 0.0059 $</p> 
        <h3 className='mt-5'>Change the coin price</h3>  
        <form onSubmit={handleCoinPricing}>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Change One Coin Price to Dollar (Input Example: 0.0065)</label>
            <br/>
            <input type="number" class="form-control w-50" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn login-button text-white">Change Coin Price</button>
        </form>         
        </div>
    );
};

export default CoinPricing;