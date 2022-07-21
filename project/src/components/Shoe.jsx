import { useEffect, useState } from "react";
// import axios from "axios";
import Shoe1 from "./Shoe1";
import styles from "./Shoe.module.css";
import { Box, Flex } from "@chakra-ui/react";

const Shoe = ({ products }) => {
  const [shoes, setShoes] = useState([]);

  const getData = () => {
    fetch(`http://localhost:3001/${products}`)
      .then((res) => res.json())
      .then((d) => setShoes(d));
  };

  useEffect(() => {
    getData();
  }, [products]);

  const filterProducts = (filterType) => {
    // console.log(filterType);
    switch (filterType) {
      case "feature":
        break;
      case "price_lToh":
        sortByPrice("price_lToh");
        break;
      case "price_hTol":
        sortByPrice("price_hTol");
        break;
      case "newest":
        break;
      case "bestselling":
        break;
      case "rating_hTol":
        break;
      case "aToz":
        sortByTitle("aToz");
        break;
      case "zToa":
        sortByTitle("zToa");
        break;
      default:
        break;
    }
  };

  const sortByPrice = (priceSortType) => {
    let newShoes = [];
    if (priceSortType === "price_lToh") {
      // sort asc
      newShoes = shoes.sort(function (a, b) {
        return Number(a.price) - Number(b.price);
      });
    } else {
      // sort desc
      newShoes = shoes.sort(function (a, b) {
        return Number(b.price) - Number(a.price);
      });
    }
    setShoes([...newShoes]);
  };
  const sortByTitle = (titleSortType) => {
    let newShoes = [];
    if (titleSortType === "aToz") {
      // sort asc
      newShoes = shoes.sort((a, b) => (a.title > b.title ? 1 : -1));
    } else {
      // sort desc
      newShoes = shoes.sort((a, b) => (b.title > a.title ? 1 : -1));
    }
    setShoes([...newShoes]);
  };

  useEffect(() => {
    console.log("Shoes: ", shoes);
  }, [shoes]);
  return (
    <div>
      <Flex marginLeft={"-200px"} marginBottom={"-40px"}>
        <Box>
          <div
            class="centered"
            style={{ position: "absolute", top: "50%", left: "50%" }}
          >
            Centered
          </div>
          <img
            style={{
              width: "195px",
              height: "70px",
              marginTop: "30px",
              marginRight: "15px",
            }}
            src="https://images.ctfassets.net/5de70he6op10/4FcYIjIGRr8RSjpXeazWlu/e816127c5bc16632df8f3b11688d71db/boots.jpg?w=630&q=80&fm=webp"
          />
        </Box>
        <img
          style={{
            width: "195px",
            height: "70px",
            marginTop: "30px",
            marginRight: "15px",
          }}
          src="https://images.ctfassets.net/5de70he6op10/39UHz7e1mlO8F4OJOeFsS/aa5da7c9d538afa0f69dea5fe7045914/clogs.jpg?w=630&q=80&fm=webp"
        />
        <img
          style={{
            width: "195px",
            height: "70px",
            marginTop: "30px",
            marginRight: "15px",
          }}
          src="https://images.ctfassets.net/5de70he6op10/2stZ8y696htfya9xYW18OE/94f013903bd248ec4cd033edab0a4d95/cowboy_boots.jpg?w=630&q=80&fm=webp"
        />
        <img
          style={{
            width: "195px",
            height: "70px",
            marginTop: "30px",
            marginRight: "15px",
          }}
          src="https://images.ctfassets.net/5de70he6op10/4CnnuezEiO56gbXIr3sqv7/a1418995cb85767fabaee3ef4065ad24/heels.jpg?w=630&q=80&fm=webp"
        />
        <img
          style={{
            width: "195px",
            height: "70px",
            marginTop: "30px",
            marginRight: "15px",
          }}
          src="https://images.ctfassets.net/5de70he6op10/1oUpQ82nDyZdgsrinZq3lM/904c68d0732d1189e387bbb77ef57881/mary_janes.jpg?w=630&q=80&fm=webp"
        />
        <img
          style={{
            width: "195px",
            height: "70px",
            marginTop: "30px",
            marginRight: "15px",
          }}
          src="https://images.ctfassets.net/5de70he6op10/1oUpQ82nDyZdgsrinZq3lM/904c68d0732d1189e387bbb77ef57881/mary_janes.jpg?w=630&q=80&fm=webp"
        />{" "}
      </Flex>
      <div className={styles.flex} style={{ marginTop: "90px" }}>
        <div className={styles.h}>Women's {products}</div>
        <div>
          <label>Sort: </label>
          <select onChange={(e) => filterProducts(e.target.value)}>
            <option value="feature">Fetured</option>
            <option value="price_lToh">Price: low to high</option>
            <option value="price_hTol">Price: high to low</option>
            <option value="newest">Newest</option>
            <option value="bestselling">Bestselling</option>
            <option value="rating_hTol">Rating: high to low</option>
            <option value="aToz">A-Z</option>
            <option value="zToa">Z-A</option>
          </select>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
          marginLeft: "0px",
          marginTop: "40px",
          marginRight: "40px",
        }}
      >
        {shoes.map((item) => {
          return <Shoe1 key={item.id} item={item} location={products} />;
        })}
      </div>
    </div>
  );
};

export default Shoe;
