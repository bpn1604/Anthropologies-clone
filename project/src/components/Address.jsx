import React, { useState } from "react";
import style from "./address.module.css";
import { BsBoxSeam } from "react-icons/bs";
import PaymentBox from "./Payment";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Checkbox, Input } from '@chakra-ui/react'
import { useEffect } from "react";
import styles from "./Navbar.module.css";
import { RiGlobeLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { AiOutlineUser, AiOutlineSearch } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
//import style from "./login.module.css";
import { FaRegEye } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { loginSuccess, loginFailure } from "../redux/action";
import { Box, Flex } from "@chakra-ui/react";

const Address = () => {
  let d = JSON.parse(localStorage.getItem("cartData")) || [];
  const isAuth = useSelector((state) => state.isAuth);
  const navigate = useNavigate();
  const [formData, setformData] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const length = JSON.parse(localStorage.getItem("cartData")) || [];
    setCart(length);
  }, [JSON.parse(localStorage.getItem("cartData"))]);
  const handleChange = (e) => {
    const inputName = e.target.name;
    setformData({ ...formData, [inputName]: e.target.value });
  };

  const handlClick = () => {
    if (
      formData.country == undefined ||
      formData.first == undefined ||
      formData.last == undefined ||
      formData.address == undefined ||
      formData.address2 == undefined ||
      formData.city == undefined ||
      formData.province == undefined ||
      formData.postcode == undefined ||
      formData.phone == undefined
    ) {
      alert("Fill all Fields");
    } else {
      localStorage.setItem("data", JSON.stringify(formData));
      navigate("/shippingPage");
    }
  };

  const [formData2, setformData2] = useState({});
  const [formData1, setformData1] = useState({});
  const [passtype, setpasstype] = useState(false);

  const handleChange2 = (e) => {
    const inputName = e.target.name;
    setformData2({ ...formData2, [inputName]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData2.first === undefined ||
      formData2.last === undefined ||
      formData2.email === undefined ||
      formData2.password === undefined
    ) {
      alert("Fill all Fields");
    } else {
      localStorage.setItem("login", JSON.stringify(formData2));
    }
  };

  const handleChange1 = (e) => {
    const inputName1 = e.target.name;
    setformData1({ ...formData1, [inputName1]: e.target.value });
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    let data1 = JSON.parse(localStorage.getItem("login"));
    if (
      data1.email === formData1.email &&
      data1.password === formData1.password1
    ) {
      alert("Login Success");
    } else {
      alert("Login Fail");
    }
  };

  return isAuth ? (
    <>
      <div
        className="d-flex justify-content-between "
        style={{ borderBottom: "1px solid #d3d3d3" }}
      >
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
        <div className="d-flex align-items-center me-5 pt-2">
          <form action="" className="mx-4">
            <div className="input-group">
              {/* <input
                type="text"
                className=" form-control-lg"
                placeholder="Search Anthropologie"
                style={{
                  fontSize: "14px",
                  outline: "none",
                  border: "1px solid #d3d3d3",
                }}
              /> */}
              {/* <button
                type="submit"
                className="input-group-text"
                style={{ background: "white", border: "1px solid #d3d3d3" }}
              >
                <AiOutlineSearch color="#77a0b2" fontSize="23px" />
              </button> */}
            </div>
          </form>
          <Link to="/cart">
            <BsHandbag color="#2e80a1" fontSize="23px" />{" "}
            <span className="translate-middle badge rounded-pill bg-danger">
              {cart.length == 0 ? 0 : cart.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </Link>
        </div>
      </div>

      <Flex flexDirection="column" padding={"30px" }>
        <Box fontFamily={"sans-serif"}>Ship or Pick Up / Payment / Review</Box>
        <Flex>
        <Box border={"1px solid"} width={"600px"} background={"whitesmoke"} fontFamily={"sans-serif"}  marginTop={"20px"}>
        <p style={{margin:"10px"}}>Already Have an Account?</p>
        <br />
        <Input marginLeft={"60%"} marginBottom={"-80%"} placeholder='SIGN IN'  width={"30%"}/>
        <p style={{margin:"10px" , marginTop:"-15px"}}>Sign in to check out faster.</p>
        
        </Box>
        
        </Flex>
        <Box marginTop={"10px"} border={"1px solid" }width={"600px"} height={"130px"}>
        Check out as a guest
        <br />
        Email Address:
        <br />
        <Input width={"40%"} />
        <br />
        <Flex gap={"10px"}>
        <Checkbox />
        <label>Please send me Anthropologie offers, promotions, and other commercial messages. (You may unsubscribe at any time.)</label>
        </Flex>
      </Box>
      </Flex>
      
      <div
        className={style.container}
        style={{ backgroundColor: "rgb(247, 253, 253)" }}
      >
        <div
          className={style.main}
          style={{ backgroundColor: "rgb(245,245,220)" }}
        >
          <div className={style.font}>
            <div style={{ fontSize: "20px", marginRight: "10px" }}>
              <BsBoxSeam />
            </div>
            <Flex gap={"50px"}>
            <h3>Ship</h3>
            <img  style={{width:"20px"}} src="data:image/png;base64,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" />
            <h3>Pick Up</h3>
            </Flex>
          </div>
          <hr className={style.new1} />

          <h5 className={style.box2}>Shipping Address</h5>
          <span className={style.box1}>Country/Region*</span>
          <br />
          <select
            name="country"
            id="country"
            required
            className={style.box3}
            onChange={handleChange}
          >
            <option value=""></option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Iraq">Iraq</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Bhutan">Bhutan</option>
            <option value="China">China</option>
            <option value="Hong Kong">Hong Kong</option>
          </select>
          <br />
          <div className={style.boxs1}>
            <div>
              <span className={style.box1}>First Name*</span>
              <br />
              <input
                onChange={handleChange}
                name="first"
                required
                type="text"
                className={style.box7}
              />
            </div>
            <div>
              <span className={style.box1}>Last Name*</span>
              <br />
              <input
                onChange={handleChange}
                name="last"
                required
                type="text"
                className={style.box7}
              />
            </div>
          </div>

          <span className={style.box1}>Street Address*</span>
          <br />
          <input
            onChange={handleChange}
            name="address"
            required
            type="text"
            placeholder="35 character limit,continue below."
            className={style.boxs2}
          />
          <br />
          <span className={style.box1}>Address2*</span>
          <br />
          <input
            onChange={handleChange}
            name="address2"
            required
            type="text"
            placeholder="Building, Suite or Apartment Number"
            className={style.boxs2}
          />
          <br />
          <input required type="checkbox" className={style.box5} />
          <span className={style.box1}>PO Box</span>
          <br />
          <div className={style.boxs1}>
            <div>
              <span className={style.box1}>City*</span>
              <br />
              <input
                onChange={handleChange}
                name="city"
                required
                type="text"
                className={style.box7}
              />
            </div>
            <div>
              <span className={style.box1}>Province or Region*</span>
              <br />
              <input
                onChange={handleChange}
                name="province"
                required
                type="text"
                placeholder="Province or Region"
                className={style.box7}
              />
            </div>
          </div>

          <span className={style.box1}>Postcode*</span>
          <br />
          <input
            onChange={handleChange}
            name="postcode"
            required
            type="text"
            className={style.box7}
          />
          <br />
          <span className={style.box1}>Daytime Phone*</span>
          <br />
          <input
            onChange={handleChange}
            name="phone"
            required
            type="text"
            placeholder="Do not enter a country code"
            className={style.box7}
          />
        </div>

        {/* <!-- ------------------------second part----------------------------------  --> */}

        <div className={style.main2}>
          <PaymentBox
            data={d}
            top="200px"
            clickMe={handlClick}
            title="SHIP TO THIS ADDRESS "
          />
        </div>
      </div>
    </>
  ) : (
    <>
      {" "}
      <div className={style.box4}>
        <div>
          <h5>Already Have an Account?</h5>
          <p>Sign in to check out faster.</p>
        </div>
        <div>
          <div
            className="modal"
            id="exampleModalToggle"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel"
            tabIndex="-1"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>
                <p className="text-center fs-2 mb-auto">Sign Up</p>
                <hr />
                <p className="text-center text-sm-start-center px-4 mt-auto">
                  Sign in so you can save items to your wishlists, track your
                  orders, and check out faster!
                </p>
                <div className="modal-body">
                  <div className={style.style2}>
                    <form className={style.form} onSubmit={handleSubmit}>
                      <p>FIRST NAME</p>
                      <input
                        required
                        onChange={handleChange2}
                        name="first"
                        type="text"
                        className={style.style3}
                        style={{ textTransform: "capitalize" }}
                      />
                      <p>LAST NAME</p>
                      <input
                        required
                        onChange={handleChange2}
                        name="last"
                        type="text"
                        className={style.style3}
                        style={{ textTransform: "capitalize" }}
                      />
                      <p>EMAIL</p>
                      <input
                        required
                        onChange={handleChange2}
                        name="email"
                        type="email"
                        className={style.style3}
                      />
                      <p>PASSWORD</p>
                      <input
                        onChange={handleChange2}
                        name="password"
                        type={!passtype ? "password" : "text"}
                        className={style.style3}
                      />
                      <i
                        style={{ marginLeft: "-30px", cursor: "pointer" }}
                        className="fa-solid fa-eye"
                        onClick={() => {
                          setpasstype(!passtype);
                        }}
                      ></i>
                      <p></p>
                      <input
                        required
                        type="submit"
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                        value="Create"
                        className={style.style4}
                      />
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <p className="text-center mx-auto">
                    If Already Have An Account Click Sign In.
                  </p>
                  <button
                    className="btn btn-secondary d-grid col-10 row-2 mx-auto"
                    data-bs-target="#exampleModalToggle2"
                    data-bs-toggle="modal"
                  >
                    Sign In
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --------------------------------sign in------------------------------ */}

          <div
            className="modal"
            id="exampleModalToggle2"
            aria-hidden="true"
            aria-labelledby="exampleModalToggleLabel2"
            tabndex="-1"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <p className="text-center fs-1 mb-1">Sign In</p>
                <hr />
                <div className="modal-body">
                  <div className={style.style2}>
                    <form className={style.form} onSubmit={handleSubmit1}>
                      <p>EMAIL</p>
                      <input
                        required
                        onChange={handleChange1}
                        name="email"
                        type="email"
                        className={style.style3}
                      />
                      <p>PASSWORD</p>
                      <input
                        required
                        onChange={handleChange1}
                        name="password1"
                        type={!passtype ? "password" : "text"}
                        className={style.style3}
                      />
                      <i
                        style={{ marginLeft: "-30px", cursor: "pointer" }}
                        className="fa-solid fa-eye"
                        onClick={() => {
                          setpasstype(!passtype);
                        }}
                      ></i>

                      <p></p>
                      <input
                        data-bs-dismiss="modal"
                        onSubmit={handleSubmit1}
                        type="submit"
                        value="Sign In"
                        className={style.style4}
                      />
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <p className="text-center mx-auto">
                    If Don't Have An Account Click Create An Account.
                  </p>
                  <button
                    className="btn btn-secondary d-grid col-10 row-2 mx-auto"
                    data-bs-target="#exampleModalToggle"
                    data-bs-toggle="modal"
                  >
                    CREATE AN ACCOUNT
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Open first modal</a> */}

          <button
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
          >
            SIGN IN
          </button>
        </div>
      </div>
    </>
  );
};

export default Address;
