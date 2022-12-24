import React from 'react'
import '../Popup/Popup.css'
const PromotionPopup = ({trigger, setTriggers, promotion}) => {
  return (trigger) ? (
    <div className="popup">
        <div className="popup-inner-review">
          <p className="popup-title">Rate Product</p>

          <div className="popup-product">
              <img src={require('../../Images/' + promotion.img + '.png')}></img>
            <p>{promotion.name}</p>
          </div>
         <hr></hr>
          <div className="popup-score">
            <p>Product Quality</p>
            <div className="popup-star">
            <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
            </div>
          </div>
          
          <div className="popup-detail">
            <input type="text" id="review" name="review" placeholder="Share more thoughts on the product to help other buyers."></input>
          </div>

          <div className="popup-detail">
            <input type="image" id="image" name="image" placeholder="Add Image"></input>
          </div>

          <div className="popup-detail">
            <p id="header">About Service</p>
          </div>

          <div className="popup-score">
            <p>Seller's Service</p>
            <div className="popup-star">
              <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
            </div>
          </div>

          <div className="popup-score">
            <p>Delivery Service</p>
            <div className="popup-star">
            <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
              <img src={require('../../Images/star.png')}>
              </img>
            </div>
          </div>

          <div className="button">
            <button className="cancel-btn" onClick={() => setTriggers(false)}>Cancel</button>
            <button className="save-btn" onClick={() => setTriggers(false)}>Save</button>
          </div>
        </div>
    </div>
  ) : "";
}


export default PromotionPopup