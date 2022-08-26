import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "../components/Nav.module.css";
import {
  Input,
  IconButton,
  Stack,
  Image,
  Box,
  InputLeftElement,
  InputGroup,
  StatHelpText,
} from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";
import { AiOutlineUser } from "react-icons/ai";
import { BsHeart, BsBag } from "react-icons/bs";
// import { searchapi } from "../components/Api";

export default function All_Links() {
  const [text, setText] = useState("");
  // const [submit, setSubmit] = useState();

  // function handlekeydown(e) {
  //   if (e.key == "Enter") {
  //     setData(text);
  // setSubmit(text);
  //   }
  // }

  // useEffect(() => {
  //   handleSearch();
  // }, [submit]);

  // function handleSearch() {
  //   searchapi({ submit }).then((res) => {
  //     console.log(res.data);
  //     setData(res.data);
  //   });
  // }

  const links = [
    {
      path: "/",
      title: "HOME",
      id: 1,
    },
    {
      path: "mens",
      title: "MENS",
      id: 2,
    },
    {
      path: "womens",
      title: "WOMENS",
      id: 3,
    },
    {
      path: "login",
      title: "LOGIN",
      id: 4,
    },
    {
      path: "signup",
      title: "SIGNUP",
      id: 5,
    },
    {
      path: "kids",
      title: "KIDS",
      id: 6,
    },
    {
      path: "living",
      title: "HOME & LIVING",
      id: 7,
    },
    {
      path: "beauty",
      title: "BEAUTY",
      id: 8,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.main}>
        <Link to="/" className={styles.link}>
          <Image
            src="https://www.freepnglogos.com/uploads/logo-myntra-png/myntra-logo-m-png-3.png"
            h="100%"
            w="200%"
            alt="Dan Abramov"
          />
        </Link>

        <div className={styles.nav5}>
          <ul>
            <li>
              <NavLink to="mens">MENS</NavLink>
              <NavLink to="singleproduct"></NavLink>
              <div>
                <ul>
                  <li>
                    <a href="">Topwear</a>{" "}
                  </li>
                  <li>
                    <a href="">T-Shirts</a>{" "}
                  </li>
                  <li>
                    <a href=""> Casual Shirts</a>{" "}
                  </li>
                  <li>
                    <a href="">Formal Shirts</a>{" "}
                  </li>
                  <li>
                    <a href=""> Sweatshirts</a>{" "}
                  </li>
                  <li>
                    <a href="">Sweaters</a>{" "}
                  </li>
                  <li>
                    <a href="">Jackets</a>{" "}
                  </li>
                  <li>
                    <a href="">Blazers & Coats</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Suits</a>
                  </li>
                  <li>
                    <a href="">Rain Jackets</a>
                  </li>
                  <li>
                    <a href="">Indian & Festive Wear</a>
                  </li>
                  <li>
                    <a href="">Kurtas & Kurta Sets</a>
                  </li>
                  <li>
                    <a href="">Sherwanis</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Nehru Jackets</a>{" "}
                  </li>
                  <li>
                    <a href=""> Dhotis</a>{" "}
                  </li>
                  <li>
                    <a href="">Bottomwear</a>{" "}
                  </li>
                  <li>
                    <a href=""> Jeans</a>{" "}
                  </li>
                  <li>
                    <a href="">Casual Trousers</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href=""> Formal Trousers</a>{" "}
                  </li>
                  <li>
                    <a href="">Shorts</a>{" "}
                  </li>
                  <li>
                    <a href="">Track Pants & Joggers</a>{" "}
                  </li>
                  <li>
                    <a href=""> Innerwear & Sleepwear</a>{" "}
                  </li>
                  <li>
                    <a href="">Briefs & Trunks</a>{" "}
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="">Boxers</a>{" "}
                  </li>
                  <li>
                    <a href=""> Vests</a>{" "}
                  </li>
                  <li>
                    <a href="">Sleepwear & Loungewear</a>{" "}
                  </li>
                  <li>
                    <a href="">Plus Size</a>{" "}
                  </li>
                  <li>
                    <a href="">Footwear</a>{" "}
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* second route womens */}

          <ul>
            <li>
              <NavLink to="womens">WOMENS</NavLink>
              <div>
                <ul>
                  <li>
                    <a href="">Casual Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="">Sports Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="">Formal Shoes</a>{" "}
                  </li>
                  <li>
                    <a href=""> Sneakers</a>{" "}
                  </li>
                  <li>
                    <a href=""> Flip Flops</a>{" "}
                  </li>
                  <li>
                    <a href="">Socks</a>{" "}
                  </li>
                  <li>
                    <a href="">Personal Care & Grooming</a>{" "}
                  </li>
                  <li>
                    <a href="">Sunglasses & Frames</a>{" "}
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href="">Luggages & Trolleys</a>
                  </li>
                  <li>
                    <a href="">Bags & Backpacks</a>
                  </li>
                  <li>
                    <a href=""> Helmets</a>
                  </li>
                  <li>
                    <a href="">Rings & Wristwear</a>
                  </li>
                  <li>
                    <a href="">Phone Cases</a>
                  </li>
                </ul>

                <ul>
                  <li>
                    <a href=""> Watches</a>{" "}
                  </li>
                  <li>
                    <a href="">Sports & Active Wear</a>{" "}
                  </li>
                  <li>
                    <a href="">Sports Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="">Sports Sandals</a>{" "}
                  </li>
                  <li>
                    <a href="">Active T-Shirts</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href=""> Track Pants & Shorts</a>{" "}
                  </li>
                  <li>
                    <a href="">Tracksuits</a>{" "}
                  </li>
                  <li>
                    <a href="">Sports Accessories</a>{" "}
                  </li>
                  <li>
                    <a href="">Jackets & Sweatshirts</a>{" "}
                  </li>
                  <li>
                    <a href="">Sandals</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href=""> Gadgets</a>{" "}
                  </li>
                  <li>
                    <a href="">Smart Wearables</a>{" "}
                  </li>
                  <li>
                    <a href="">Headphones</a>{" "}
                  </li>
                  <li>
                    <a href="">Fitness Gadgets</a>{" "}
                  </li>
                  <li>
                    <a href=""> Speakers</a>{" "}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">KIDS</a>
              <div>
                <ul>
                  <li>
                    <a href=""> Boys Clothing</a>{" "}
                  </li>
                  <li>
                    <a href="">T-Shirts</a>{" "}
                  </li>
                  <li>
                    <a href="">Short</a>{" "}
                  </li>
                  <li>
                    <a href="">Jeans</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Trousers</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Ethnic Wear</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Track Pants & Pyjamas</a>
                  </li>
                  <li>
                    <a href="">Jacket, Sweater & Sweatshirts</a>
                  </li>
                  <li>
                    <a href="">Party Wear</a>
                  </li>
                  <li>
                    <a href="">Innerwear & Thermals</a>
                  </li>
                  <li>
                    <a href="">Nightwear & Loungewear</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Value Packs</a>{" "}
                  </li>
                  <li>
                    <a href="">Girls Clothing</a>{" "}
                  </li>
                  <li>
                    <a href="">Dresses</a>{" "}
                  </li>
                  <li>
                    <a href="">Tops</a>{" "}
                  </li>
                  <li>
                    <a href="">Tshirts</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Dungarees & Jumpsuits</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Tights & Leggings</a>{" "}
                  </li>
                  <li>
                    <a href="">Sports Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="">Sandals</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Jacket, Sweater & Sweatshirts</a>{" "}
                  </li>
                  <li>
                    <a href="">Learning & Development</a>{" "}
                  </li>
                  <li>
                    <a href="">Kurta Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Heels</a>{" "}
                  </li>
                  <li>
                    <a href="">Ellis Brooklyn</a>{" "}
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Home $7 living */}

          <ul>
            <li>
              <a href="">HOME & LIVING</a>
              <div>
                <ul>
                  <li>
                    <a href="">Brands A-Z</a>{" "}
                  </li>
                  <li>
                    <a href="">Girls Clothing</a>{" "}
                  </li>
                  <li>
                    <a href="">New Brands</a>{" "}
                  </li>
                  <li>
                    <a href="">The Outset</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Trousers</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Ethnic Wear</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Track Pants & Pyjamas</a>
                  </li>
                  <li>
                    <a href="">Jacket, Sweater & Sweatshirts</a>
                  </li>
                  <li>
                    <a href="">Party Wear</a>
                  </li>
                  <li>
                    <a href="">Innerwear & Thermals</a>
                  </li>
                  <li>
                    <a href="">Nightwear & Loungewear</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Value Packs</a>{" "}
                  </li>
                  <li>
                    <a href="">Girls Clothing</a>{" "}
                  </li>
                  <li>
                    <a href="">Dresses</a>{" "}
                  </li>
                  <li>
                    <a href="">Tops</a>{" "}
                  </li>
                  <li>
                    <a href="">Tshirts</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">BDungarees & Jumpsuits</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Tights & Leggings</a>{" "}
                  </li>
                  <li>
                    <a href="">Sports Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="">Sandals</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Jacket, Sweater & Sweatshirts</a>{" "}
                  </li>
                  <li>
                    <a href="">Learning & Development</a>{" "}
                  </li>
                  <li>
                    <a href="">Kurta Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Heels</a>{" "}
                  </li>
                  <li>
                    <a href="">Ellis Brooklyn</a>{" "}
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* BEAUTY */}

          <ul>
            <li>
              <a href="">BEAUTY</a>
              <div>
                <ul>
                  <li>
                    <a href="">Brands A-Z</a>{" "}
                  </li>
                  <li>
                    <a href="">Girls Clothing</a>{" "}
                  </li>
                  <li>
                    <a href="">New Brands</a>{" "}
                  </li>
                  <li>
                    <a href="">The Outset</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Trousers</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Ethnic Wear</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Track Pants & Pyjamas</a>
                  </li>
                  <li>
                    <a href="">Jacket, Sweater & Sweatshirts</a>
                  </li>
                  <li>
                    <a href="">Party Wear</a>
                  </li>
                  <li>
                    <a href="">Innerwear & Thermals</a>
                  </li>
                  <li>
                    <a href="">Nightwear & Loungewear</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Value Packs</a>{" "}
                  </li>
                  <li>
                    <a href="">Girls Clothing</a>{" "}
                  </li>
                  <li>
                    <a href="">Dresses</a>{" "}
                  </li>
                  <li>
                    <a href="">Tops</a>{" "}
                  </li>
                  <li>
                    <a href="">Tshirts</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">BDungarees & Jumpsuits</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Tights & Leggings</a>{" "}
                  </li>
                  <li>
                    <a href="">Sports Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="">Sandals</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Jacket, Sweater & Sweatshirts</a>{" "}
                  </li>
                  <li>
                    <a href="">Learning & Development</a>{" "}
                  </li>
                  <li>
                    <a href="">Kurta Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Heels</a>{" "}
                  </li>
                  <li>
                    <a href="">Heels</a>{" "}
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Studio */}

          <ul>
            <li>
              <a href="">STUDIO</a>
              <div>
                <ul>
                  <li>
                    <a href="">Brands A-Z</a>{" "}
                  </li>
                  <li>
                    <a href="">Girls Clothing</a>{" "}
                  </li>
                  <li>
                    <a href="">New Brands</a>{" "}
                  </li>
                  <li>
                    <a href="">The Outset</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Trousers</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Ethnic Wear</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Track Pants & Pyjamas</a>
                  </li>
                  <li>
                    <a href="">Jacket, Sweater & Sweatshirts</a>
                  </li>
                  <li>
                    <a href="">Party Wear</a>
                  </li>
                  <li>
                    <a href="">Innerwear & Thermals</a>
                  </li>
                  <li>
                    <a href="">Nightwear & Loungewear</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Value Packs</a>{" "}
                  </li>
                  <li>
                    <a href="">Girls Clothing</a>{" "}
                  </li>
                  <li>
                    <a href="">Dresses</a>{" "}
                  </li>
                  <li>
                    <a href="">Tops</a>{" "}
                  </li>
                  <li>
                    <a href="">Tshirts</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">BDungarees & Jumpsuits</a>{" "}
                  </li>
                  <li>
                    <a href="">Clothing Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Tights & Leggings</a>{" "}
                  </li>
                  <li>
                    <a href="">Sports Shoes</a>{" "}
                  </li>
                  <li>
                    <a href="">Sandals</a>{" "}
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Jacket, Sweater & Sweatshirts</a>{" "}
                  </li>
                  <li>
                    <a href="">Learning & Development</a>{" "}
                  </li>
                  <li>
                    <a href="">Kurta Sets</a>{" "}
                  </li>
                  <li>
                    <a href="">Heels</a>{" "}
                  </li>
                  <li>
                    <a href="">Ellis Brooklyn</a>{" "}
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <InputGroup className={styles.input} w="33%">
          <InputLeftElement
            pointerEvents="none"
            children={<Search2Icon color="gray.300" />}
          />
          <Input
            onKeyDown={(e) => handlekeydown(e)}
            onChange={(e) => setText(e.target.value)}
            type="tel"
            placeholder="Search for products ,brand and more"
          />
        </InputGroup>
        <div className={styles.icon}>
          <h1>
            <Link to="/login">
              <AiOutlineUser />
              </Link>
          </h1>
          <h1>
            <BsHeart />
          </h1>
          <h1>
            <Link to="/cart">
              <BsBag />
            </Link>
          </h1>
        </div>
      </div>

      {/* </Stack> */}
    </div>
  );
}
