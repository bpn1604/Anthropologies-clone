import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import PaymentBox from './Payment'
import style from './ShipDetail.module.css'
// import CartItem from './CartItem'
// import styles from './Cart.module.css'

const ShipDetail = () => {
  const navigate = useNavigate();
  const handlClick = ()=>{
    navigate("/carddeatils")
  }


  let data = JSON.parse(localStorage.getItem("cartData")) || [];

  const data1 =JSON.parse(localStorage.getItem("data"))
 
  
  return (<>
    <div className="d-flex  ms-5" style={{ height: "50px" }}>
          <div
            onClick={"gotohome"}
            className="py-3"
            style={{
              borderLeft: "1px solid #d3d3d3",
              borderTop: "3px solid #167a92",
            }}
          >
            <a href="">
              <img
                style={{ padding: "10px" }}
                src="https://images.ctfassets.net/5de70he6op10/53ZOE4rRqrxcvv0hg2eSLV/a849085e5f600c618132be2475017746/anthro-logo.svg"
                alt=""
              />
            </a>
          </div>
          <div
            className="py-3"
            style={{
              borderLeft: "1px solid #d3d3d3",
              borderRight: "1px solid #d3d3d3",
            }}
          >
            <a href="">
              <img
                style={{ padding: "10px" }}
                src="https://images.ctfassets.net/5de70he6op10/y1O9tEDOvCGliGUvT9RoJ/eb8ab4734c5e3778b8b61da70ed441ac/AL_NewLogo_2.svg"
                alt=""
              />
            </a>
          </div>
        </div>
    <div className={style.container}>
      <div className={style.main}>
        <h5>Shipping To {data1.first} {data1.last}</h5>
        <div className={style.box}>
          <div className={style.box1}>
            <p>{data1.first} {data1.last} </p>
            <p>{data1.address}</p>
            <p>{data1.address2}</p>
            <p>{data1.city} / {data1.province} / {data1.postcode}</p>
            <p>{data1.country}</p>
            <p>{data1.phone}</p>
          </div>
          <div className={style.box2}>
            <p>Express and Overnight orders placed after 1 PM ET typically ship the next business day.</p>
          </div>
          <div className={style.box3}>
            <h6>7-12 business days - $60.00</h6>
            <p>Standard International</p>
            <p>Your order will be delivered by your local postal service and carrier brokerage fees may apply. Duties & taxes will be assessed upon delivery and may be nonrefundable. Order total in checkout is calculated in USD.</p>
          </div>
         
         
          <div className="d-flex align-items-center justify-content-between py-3" style={{width:"100%",borderBottom:"1px solid #d3d3d3",borderTop:"1px solid #d3d3d3"}}>
            <div className={`d-flex justify-content-center align-items-center  ${style.items}`}>
                <p className="my-0">Item</p>
            </div>
            <div className={`d-flex align-items-center justify-content-around ${style.itamTags}`}>
                <p className="my-0">Item price</p>
                <p className="my-0">Quantity</p>
                <p className="my-0">Total Price</p>
            </div>
        </div>
        {data.map((item)=>{
          return <div>
       <div className="d-flex align-items-center justify-content-between py-3" style={{width:"100%",position:"relative"}}>
            <div className={`d-flex ${style.items}`}>
                <div style={{width:"34%"}}>
                <img style={{width:"100%"}} src={item.img2} alt="" />
                </div>
                <div className={style.info}>
                    <p>{item.title}</p>
                    <p>Expected to ship on May 26, 2022</p>
                    <p>Style <span>#69606119</span></p>
                    <p>Color: <span> BLACK</span></p>
                    <p>Size: <span>{item.size}</span> </p>
                </div>

            </div>
            <div className={`d-flex justify-content-around ${style.itemsPrice}`}>
                <p className="my-0">${item.price}</p>
                <p className="my-0">{item.quantity}</p>
                <p className="my-0">${item.total}</p>
            </div>
        </div>
    </div>
        })}

        </div>
      </div>

      {/* <!-- ------------------------second part----------------------------------  --> */}

      <div className={style.main2}>
       <PaymentBox data={data} top="200px" clickMe={handlClick} title="Continue to Payment"/>
     {/* <Link to="/Cardetails">cartdetails</Link> */}
      </div>
    </div>
  </>)
}

export default ShipDetail