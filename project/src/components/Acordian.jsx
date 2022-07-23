import { Flex } from "@chakra-ui/react";
import React from "react";
import styles from "./Acordian.module.css";

const Acordian = () => {
  return (
    <>
      <div className={styles.maindiv} style={{ marginTop: "200px" }}>
        <p className={styles.firstp}>Browse by:</p>
        <hr className={styles.apnahr} />

        <div className={styles.atag}>
          <a href="#">Shoes</a>
          <hr style={{ width: "10%" }} />

          <a href="#">New!</a>
          <a href="#">Boots & Booties</a>
          <a href="#">Flats</a>
          <a href="#">Heels & Wedges</a>
          <a href="#">Mules & Clogs</a>
          <a href="#">Sandals</a>
          <a href="#">Slippers</a>
          <a href="#">Sneakers</a>
        </div>

        <p className={styles.firstp}>Filter by:</p>
        <hr className={styles.apnahr} />

        {/* //bootstrap part */}

        <div className={styles.acd}>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <p className="accordion-header pricetag" id="flush-headingOne">
                <button
                  style={{ width: "200px" }}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Material
                </button>
              </p>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className={styles.btdiv}>
                    <button>
                      <a href="">Leather</a>
                    </button>
                    <button>
                      <a href="">Synthetic (129)</a>
                    </button>
                    <button>
                      <a href="">Synthetic (129)</a>
                    </button>
                    <button>
                      <a href="">Mesh (30)</a>
                    </button>
                    <button>
                      <a href="">Canvas (29)</a>
                    </button>
                    <button>
                      <a href="">Faux Leather (26)</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item ">
              <p className="accordion-header" id="flush-headingTwo">
                <button
                  style={{ width: "200px" }}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Occasion
                </button>
              </p>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body ">
                  <div className={styles.btdiv2}>
                    <button>
                      <a href="">Casual (428)</a>
                    </button>
                    <button>
                      <a href="">Party (101)</a>
                    </button>
                    <button>
                      <a href="">Work (12)</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  style={{ width: "200px" }}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Heel Height
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className={styles.btdiv2}>
                    <button>
                      <a href="">Flat (0-1") (220)</a>
                    </button>
                    <button>
                      <a href="">Mid (2-3") (86)</a>
                    </button>
                    <button>
                      <a href="">Low (1-2") (73)</a>
                    </button>
                    <button>
                      <a href=""> High (3-4") (72)</a>
                    </button>
                    <button>
                      <a href=""> Ultra High (4+") (21)</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  style={{ width: "200px" }}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  Heel Type
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className={styles.btdiv2}>
                    <button>
                      <a href="">Wedges (7)</a>
                    </button>
                    <button>
                      <a href="">Stiletto (27)</a>
                    </button>
                    <button>
                      <a href="">Kitten (6)</a>
                    </button>
                    <button>
                      <a href=""> Block (83)</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  style={{ width: "200px" }}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  Color
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className={styles.btdiv3}>
                    <button>
                      <a href=""> Black (206)</a>
                    </button>
                    <button>
                      <a href="">Leather</a>
                    </button>
                    <button>
                      <a href="">Synthetic (129)</a>
                    </button>
                    <button>
                      <a href="">Synthetic (129)</a>
                    </button>
                    <button>
                      <a href="">Mesh (30)</a>
                    </button>
                    <button>
                      <a href="">Canvas (29)</a>
                    </button>
                    <button>
                      <a href="">Faux Leather (26)</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button
                  style={{ width: "200px" }}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseSix"
                  aria-expanded="false"
                  aria-controls="flush-collapseSix"
                >
                  Size
                </button>
              </h2>
              <div
                id="flush-collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className={styles.btdiv4}>
                    <p>Alpha:</p>
                    <button>
                      <a href="">S (2)</a>
                    </button>
                    <button>
                      <a href="">M (21)</a>
                    </button>
                    <button>
                      <a href="">L (12)</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <p className="accordion-header pricetag" id="flush-headingOne">
                <button
                  style={{ width: "200px" }}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Price
                </button>
              </p>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className={styles.btdiv}>
                    <button>
                      <a href="">$25 - $50 (17)</a>
                    </button>
                    <button>
                      <a href="">$50 - $100 (163)</a>
                    </button>
                    <button>
                      <a href="">$100 - $200 (498)</a>
                    </button>
                    <button>
                      <a href="">$200 - $500 (279)</a>
                    </button>
                    <button>
                      <a href="">$200 - $500 (279)</a>
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <p className="accordion-header pricetag" id="flush-headingOne">
                <button
                  style={{ width: "200px" }}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Brand
                </button>
              </p>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className={styles.btdiv}>
                    <button>
                      <a href="">All Black (9)</a>
                    </button>
                    <button>
                      <a href="">Alohas (6)</a>
                    </button>
                    <button>
                      <a href="">Amanu (11)</a>
                    </button>
                    <button>
                      <a href="">Angel Alarcon (10)</a>
                    </button>
                    <button>
                      <a href="">Anthropologie (13)</a>
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <p className="accordion-header pricetag" id="flush-headingOne">
                <button
                  style={{ width: "200px" }}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  In Stock
                </button>
              </p>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className={styles.btdiv}>
                    <button>
                      <a href="">Ready to Ship (872)</a>
                    </button>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <p className="accordion-header pricetag" id="flush-headingOne">
                <button
                  style={{ width: "200px" }}
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Free Pickup
                </button>
              </p>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <div className={styles.btdiv}>
                    Store Pickup
                    <button>
                      <a href="">Ready to Ship (872)</a>
                    </button>
                    
                    
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Acordian;
