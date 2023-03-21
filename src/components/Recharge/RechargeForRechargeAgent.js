import React from 'react';

const RechargeForRechargeAgent = () => {
    const rechargeAmount = (event) => {
        event.preventDefault();
    }
    return (
        <div className='col-9 col-md-9 col-lg-9 mt-5 text-start ms-4'>
                <form className='ml-5' onSubmit={rechargeAmount}>
                <div class="mb-3">
                    <label for="exampleInputEmail" class="form-label">Enter User Id</label>
                    <input type="number" class="form-control w-50" id="exampleInputEmail" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Enter Recharge Amount (Coins)</label>
                    <input type="number" class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                        <button type="submit" className="btn login-button px-5 text-white mt-3">Recharge Coins</button>
                </form>
        </div>
    );
};

export default RechargeForRechargeAgent;