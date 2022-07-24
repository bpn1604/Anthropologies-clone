import React from "react";
import styles from "./SingleProduct.module.css";
import { AiFillStar } from "react-icons/ai";
import { Flex } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
const SingleProduct = ({ id, location }) => {
  const [data, setData] = React.useState({});
  const [sidedata, setSidedata] = React.useState([]);
  const handleChange = (e) => {
    let inputName = e.target.name;

    // if(e.target.name=='quantity'){
    //   setData({
    //     ...data,
    //     [inputName]:e.target.value,
    //     "total": e.target.value*data.price
    //   })
    //   console.log(e.target.value*data.price)
    // }
    // else{
    setData({
      ...data,
      [inputName]: e.target.value,
      total: data.price,
      quantity: 1,
    });
    // }
  };

  const [mainimg, setMainimg] = React.useState("");
  const handleImage = (e) => {
    setMainimg(e.target.src);
  };
  React.useEffect(() => {
    fetch(`http://localhost:3001/${location}/${id}`)
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setMainimg(d.img2);
      });
    console.log(mainimg);
    getsidedata();
  }, []);
  function getsidedata() {
    fetch(`http://localhost:3001/cloths?&_limit=4`)
      .then((res) => res.json())
      .then((d) => setSidedata(d));
  }

  const handleSubmit = () => {
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    cartData.push(data);
    localStorage.setItem("cartData", JSON.stringify(cartData));
  };
  return (
    <div>
      <div
        className="conatiner my-5 d-flex justify-content-around"
        style={{ width: "100%" }}
      >
        <div style={{ width: "8%" }}>
          <img
            onClick={handleImage}
            className={`my-2 ${styles.changeImg}`}
            src={data.img2}
            alt=""
          />
          <img
            onClick={handleImage}
            className={`my-2 ${styles.changeImg}`}
            src={data.img1}
            alt=""
          />
        </div>
        <div style={{ width: "40%" }}>
          <img style={{ width: "100%" }} src={mainimg} alt="" />
        </div>
        <div style={{ width: "30%" }}>
          <h3 className={styles.title}>{data.title}</h3>
          <a style={{ fontSize: "13px" }} href=""></a>
          <div className="mb-1">
            <Flex style={{ color: "yellow" }}>
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
              <AiFillStar color="yellow" />
            </Flex>
            <a style={{ fontSize: "13px", marginLeft: "5px" }} href="">
              Write a review
            </a>
          </div>
          <p style={{ marginBottom: "4px", fontSize: "18px" }}>${data.price}</p>
          <p
            style={{ marginBottom: "-7px", fontSize: "13px", color: "#5c5c5f" }}
          >
            Or 4 interest-free installments of $58.75 with
          </p>{" "}
          <Flex gap={"10px"}>
            <img
              style={{ width: "10%", marginTop: "10px" }}
              src="https://www.anthropologie.com/static/v3/images/klarna-logo-e1f1797f9730029d90fccb75c4be22cc.svg"
              alt=""
            />
            or
            <img
              style={{ width: "10%" }}
              src="https://www.anthropologie.com/static/v3/images/afterpay-logo-7904b549fb7a2a970c606efc9f1e8260.svg"
              alt=""
            />
          </Flex>{" "}
          <hr style={{ marginTop: "40px" }} />
          <p className={styles.color}>
            Color: <span> PINK</span>
          </p>
          <p
            className={styles.family}
            style={{ fontSize: "14px", marginBottom: "2px" }}
          >
            Size*
          </p>
          <div
            className="btn-group mb-3"
            role="group"
            aria-label="Basic radio toggle button group"
            style={{ marginRight: "5px" }}
          >
            <input
              onChange={handleChange}
              value="S"
              type="radio"
              className="btn-check"
              name="size"
              id="btnradio1"
              autoComplete="off"
              style={{ marginRight: "10px" }}
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio1">
              S
            </label>

            <input
              onChange={handleChange}
              value="M"
              type="radio"
              className="btn-check"
              name="size"
              id="btnradio2"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio2">
              M
            </label>

            <input
              onChange={handleChange}
              value="L"
              type="radio"
              className="btn-check"
              name="size"
              id="btnradio3"
              autoComplete="off"
            />
            <label className="btn btn-outline-primary" htmlFor="btnradio3">
              L
            </label>
          </div>
          <br />
          *Qty
          <Select placeholder="1" width={"100px"} marginBottom={"50px"}>
            <option value="option1"> 1 </option>
            <option value="option2"> 2 </option>
            <option value="option3"> 3 </option>
          </Select>
          <button onClick={handleSubmit} className={styles.button}>
            ADD TO BASKET
          </button>
          <div
            style={{ width: "85%" }}
            className="accordion accordion-flush"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Product Details
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p style={{ fontSize: "13px", color: "#5c5c5f" }}>
                    Style No. 66667379; Color Code: 042
                  </p>
                  <ul style={{ fontSize: "13px", color: "#5c5c5f" }}>
                    <li>Satin upper</li>
                    <li>Leather insole</li>
                    <li>Rubber sole</li>
                    <li>Satin-wrapped heel</li>
                    <li>Slip-on styling</li>
                    <li>Imported</li>
                  </ul>
                  <p style={{ color: "#5c5c5f" }}>DIMENSIONS</p>
                  <ul style={{ fontSize: "13px", color: "#5c5c5f" }}>
                    <li>Heel Height: 2"</li>
                    <li>Shaft Height: 7"</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Shipping & Returns
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <h6>Shipping</h6>
                  <p style={{ fontSize: "13px", color: "#5c5c5f" }}>
                    At checkout, we’ll provide you with an estimated delivery
                    date for your order based on your shipping method. Standard
                    shipping charges may apply based on the order value.
                    AnthroPerks members enjoy free Standard Shipping on all
                    orders $50+. Learn more about our shipping{" "}
                  </p>
                  <TableContainer>
  <Table variant='simple' style={{width:"25%" ,fontSize:"10px" }} >
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>SHIPPING METHOD</Th>
        <Th>SHIPPING TIME</Th>
        <Th isNumeric>SHIPPING FEE</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Standard</Td>
        <Td>4-8 business days</Td>
        <Td isNumeric>$6.95-$15.95 </Td>
      </Tr>
      <Tr>
        <Td>Express</Td>
        <Td>2-3 business days </Td>
        <Td isNumeric>Add $10.0</Td>
      </Tr>
      <Tr>
        <Td>Overnight</Td>
        <Td>1-2 business days </Td>
        <Td isNumeric>Add $15.00</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      
    </Tfoot>
  </Table>
</TableContainer>
                  <h6> Shoe Returns</h6>
                  <p style={{ fontSize: "13px", color: "#5c5c5f" , marginTop:"30px" }}>
                    We offer free returns by mail for shoes for any US order!
                    Shoes may not be returned to stores; these items may be
                    returned to our warehouse. 
                  </p>
                  <br />
                  <p style={{ fontSize: "13px", color: "#5c5c5f" , marginTop:"0px" }}>
                     For merchandise returned within
                    60 days of the purchase date, a refund will be issued to the
                    original form of payment at the original selling price. If
                    returned after 60 days, a merchandise credit will be issued
                    at the original selling price.
                    
                    </p>
                    <br />
                    <p style={{ fontSize: "13px", color: "#5c5c5f" , marginTop:"0px" }}>
                     View our complete return
                    policy and/or start your return online <a href="" style={{color:"blue"}}>here</a> .
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default SingleProduct;
