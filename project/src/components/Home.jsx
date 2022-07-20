import React, { useEffect, useState } from "react";
import { Slider } from "./Slider";
import "./Homemodule.css";
import { Flex } from "@chakra-ui/react";

const Home = () => {
  // const [data, setdata]=useState([])
  // const [data1, setdata1]=useState([])
  // useEffect(()=>{
  //     fetch(` http://localhost:3001/cloths`)
  //     .then((res)=>res.json())
  //     .then((d)=>setdata(d))

  //     fetch(` http://localhost:3001/shoes`)
  //     .then((res)=>res.json())
  //     .then((d)=>setdata1(d))
  // },[])
  return (
    <div className="home-container" style={{ with: "100%" }}>
      <div className="upper">
        <div className="upleft">
          <div className="full">
            <img src="https://images.ctfassets.net/5de70he6op10/6L7PLVnwzkVxVSXUzc12WN/013637593738020d6885650c300d2207/LS_M1.jpg?w=1756&q=80&fm=webp" />
            <div className="fullBtn">
              <div className="btn1">
                <a href="" className="firsta">
                  shop new clothing & accessories
                </a>
              </div>
            </div>
          </div>
          <div className="mid">
            <div className="midimage">
              <img src="https://images.ctfassets.net/5de70he6op10/7B1uDmg5zt4Bf6AZkiNRy8/de5490900d7edf46c10f489d89a5265c/2UP_Pants.jpg?w=856&q=80&fm=webp" />
              <div className="midBtn">
                <div className="btn2">
                  <a href="" className="firsta">
                    shop pants
                  </a>
                </div>
              </div>
            </div>
            <div className="midimage">
              <img src="https://images.ctfassets.net/5de70he6op10/7HIrM9qAISy8Ob4cyWTqjl/0d7894ae4954b52b7ae90550d4b8585a/2UP_Blazers.jpg?w=856&q=80&fm=webp" />
              <div className="midBtn">
                <div className="btn3">
                  <a href="" className="firsta">
                    shop blazers
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="full">
            <img src="https://images.ctfassets.net/5de70he6op10/1kAlTgmTgNVwEvOdaygujG/24f380d0322fd28b161dbbf9b439d6d4/LS_M2.jpg?w=1756&q=80&fm=webp" />
            <div className="two">
              <div className="btn4">
                <a href="" className="firsta">
                  shop the exclusive collab
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="up-right">
          <div>
            <img src="https://images.ctfassets.net/5de70he6op10/6TIhpD3Lh2NHWsTFjH5A4h/2dc26213931d34768ea089d58dedd3f8/071122_HPG_RR_Shoes.jpg?w=856&q=80&fm=webp" />
            <div className="rightBtn">
              <div className="btn22">
                <a href="" className="firsta">
                  shop shoes
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src="https://images.ctfassets.net/5de70he6op10/64HS0WF1TcoLPFrhsQeQzH/676b1f2c8c04a9d6e79d93cdbf4f3220/RR_Jeans.jpg?w=856&q=80&fm=webp" />
            <div className="rightBtn">
              <div className="btn33">
                <a href="" className="firsta">
                  shop jeans
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src="https://images.ctfassets.net/5de70he6op10/3M1DSsSCt24CcSNRDiUacl/7392ce2d876d7f3b8d2b65f633bf24bb/RR_Furniture.jpg?w=856&q=80&fm=webp" />
            <div className="rightBtn">
              <div className="btn44">
                <a href="" className="firsta">
                  shop furniture
                </a>
              </div>
            </div>
          </div>
          <div>
            <img src="https://images.ctfassets.net/5de70he6op10/7LpQ1wHnZujQXYYFl5i2Z7/6e8855c1beb94c18cc4226a378f127e3/RR_Bedding.jpg?w=856&q=80&fm=webp" />
            <div className="rightBtn">
              <div className="btn55">
                <a href="" className="firsta">
                  shop beddings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <img src="https://images.ctfassets.net/5de70he6op10/FVlmjk59pwYLRQ7fpD8TI/98f6c5a1d360224a786a4cbb3f998ab4/LS_M3.jpg?w=2694&q=80&fm=webp" />
        <div className="rightBtn">
          <div className="btn10">
            <a href="" className="firsta">
              shop dresses
            </a>
          </div>
        </div>
      </div>
      <div className="udivslider">
        <p>You May Also Like</p>
      </div>
      <div className="udivslider" >
        <Flex color="white">
            <img style={{width:"285px" , marginRight:"20px"}} src="https://images.urbndata.com/is/image/Anthropologie/64219207_013_b2?$an-category$&qlt=80&fit=constrain" ></img>
            <img style={{width:"285px" ,marginRight:"25px"}} src="https://images.urbndata.com/is/image/Anthropologie/68739671_041_b2?$an-category$&qlt=80&fit=constrain" />
            <img style={{width:"285px" , marginRight:"20px"}} src="https://images.urbndata.com/is/image/Anthropologie/51542918_070_b2?$an-category$&qlt=80&fit=constrain" />
            <img style={{width:"285px" , marginRight:"20px"}} src="https://images.urbndata.com/is/image/Anthropologie/65580631_010_b2?$an-category$&qlt=80&fit=constrain" />
            
        </Flex>
      </div>
      {/* <Slider data={data} /> */}
      
      {/* <Slider data={data1} /> */}
      <div className="lower">
        <div className="exploreData">
          <div className="udiv">
            <p>More to Explore</p>
          </div>
          <div className="exInfo">
            <div>
              <div className="exImg">
                <img src="https://images.ctfassets.net/5de70he6op10/6tH64sV86gPTuv61SGwSdJ/a1ebca8dd5b76585f243785f9aff1d8a/MTE_01.jpg?w=856&q=80&fm=webp" />
              </div>
              <div>
                <div>
                  <h2 className="little">Good Jeans: The Denim Fit Guide</h2>
                </div>
                <div className="h4div">
                  <h4>
                    Introducing the perfect pairs for every <em>wear</em>. From
                    rise to size, here's how to find your new favorite jeans.
                  </h4>
                </div>
              </div>
              <div className="atag">
                <a href="">find your fit</a>
              </div>
            </div>
            <div>
              <div className="exImg">
                <img src="https://images.ctfassets.net/5de70he6op10/1VBN5qcyiZzeTQ4o5OGPfP/0d1ca087d53e94d2c8829b74e08ae99d/MTE_Bedding.jpg?w=856&q=80&fm=webp" />
              </div>
              <div>
                <div>
                  <h2 className="little">
                    <u>A</u> Greater Good
                  </h2>
                </div>
                <div className="h4div">
                  <h4>
                    Our priority: to be a force for good,{" "}
                    <em>a greater good</em>, in better service of our planet,
                    its people, and our products.
                  </h4>
                </div>
              </div>
              <div className="atag">
                <a href="">learn more about our journey</a>
              </div>
            </div>
            <div>
              <div className="exImg">
                <img src="https://images.ctfassets.net/5de70he6op10/5z1SzJjtkNuitP2HKuc7Ww/4f0f76621a8587e50d4b9e96a30edf36/041122_HPG_MTE_GreaterGood.jpg?w=856&q=80&fm=webp" />
              </div>
              <div>
                <div>
                  <h2 className="little">The Story of Home</h2>
                </div>
                <div className="h4div">
                  <h4>
                    From front (door) to back(yard), we're reading{" "}
                    <em>between</em> the herringbone-inspired lines and
                    handwoven cords of our outdoor collection for spring.
                  </h4>
                </div>
              </div>
              <div className="atag">
                <a href="">shop the collection</a>
              </div>
            </div>
          </div>
        </div>
        <div className="about">
          <div>
            <h2>About Us</h2>
            <h4>
              Our mission at Anthropologie has always been to surprise and
              delight you with unexpected, distinctive finds for your closet and
              home. We source and craft all of our products with care, ensuring
              that any treasure you find at Anthropologie is unique, just like
              you. Explore our dress shop to find styles and fits perfect for
              any occasi...
            </h4>
          </div>
          <p className="atag">
            <a href="">Read More</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
