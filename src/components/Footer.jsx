import React from "react";
import styles from "../components/Nav.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div>
          <div>
            <h4>ONLINE SHOPPING</h4>
            <p>
              <a href="#">Men</a>
            </p>
            <p>Women</p>
            <p>Kids</p>
            <p>Home & Living</p>
            <p>Beauty</p>
            <p>Gift Cards</p>
            <p>Myntra Insider</p>
            <h4>USEFUL LINKS</h4>
            <p>Blog</p>
            <p>Careers</p>
            <p>Site Map</p>
            <p>Corporate Information</p>
            <p>Whitehat</p>
          </div>
          <div>
            <h4>CUSTOMER POLICIES</h4>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>T&C</p>
            <p>Terms Of Use</p>
            <p>Track Orders</p>
            <p>Shipping</p>
            <p>Cancellation</p>
            <p>Returns</p>
            <p>Privacy policy</p>
            <p>Grievance Officer</p>
          </div>
          <div>
            <h4>EXPERIENCE MYNTRA APP ON MOBILE</h4>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM6O9zXklYkSQxeE2SsygpTkkdwOwQcjAGg&usqp=CAU"
                alt=""
                className={styles.playstorelogo}
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb04jaQ5u0Z9xyoC05miqN72bDI8MV-q_5dg&usqp=CAU"
                alt=""
                className={styles.applelogo}
              />
            </div>
            <h4>KEEP IN TOUCH</h4>
            <div className={styles.ftyilogo}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOafmOovEtH8imHjpLE2-xxiW77C9JSI3CMvKn45XK0PzWgluQRxg7rk1nit5rCvBHd7A&usqp=CAU"
                alt=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XmvHmF9N8otaOhnFhdp8J-qVJ96RpxWfZ_22kNz4yY0G-IFTQ4ojdaVBISm4ZN7UNPI&usqp=CAU"
                alt=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv15iHY33LsmRMlfNqsjORtHzHhNxgK0f-YkwOynMVp77KX3ci2LePGOlIWfOxxdmrvyc&usqp=CAU"
                alt=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElTQEfjZPMcPvlJFllM9VAJDL2txOiUdHiA&usqp=CAU"
                alt=""
              />
            </div>
          </div>
          <div className={styles.grlogo}>
            <div>
              <img
                src="https://media.istockphoto.com/vectors/distressed-vector-stamp-seal-satisfaction-guaranteed-vector-id639900342?b=1&k=20&m=639900342&s=612x612&w=0&h=_d3vrFbrwegA3q2jd-_fREkxeS1kd_jFAY1yRt-0n6k="
                alt=""
              />
              <p>
                <b>100% ORIGINAL</b> guarantee for all products at myntra.com
              </p>
            </div>
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxyWiY3gAddtYrRWxkh9041OmxB31eAL5FsEoypCjt5JXqzMRYsKKmXrnX_YojGW848pc&usqp=CAU"
                alt=""
              />
              <p>
                <b>Return within 30days</b> of receiving your order
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4>POPULAR SEARCHES</h4>
          <p>
            Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones |
            Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags Sport
            Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops |
            Earrings | Fastrack Watches | Kurtis | Nike Smart Watches | Titan
            Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever
            21 Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra
            Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike
            Shoes | Goggles | Bras Suit | Chinos | Shoes | Adidas Shoes |
            Woodland Shoes | Jewellery | Designers Sarees
          </p>
          <div>
            <p>
              In case of any concern, <a>Contact Us</a>
            </p>
            <p>© 2022 www.myntra.com. All rights reserved.</p>
          </div>
        </div>
        <div>
          <h3>Registered Office Address</h3>
          <div>
            <div>
              <p>Buildings Alyssa,</p>
              <p>Begonia and Clover situated in Embassy Tech Village,</p>
              <p>Outer Ring Road,</p>
              <p>Devarabeesanahalli Village,</p>
              <p>Varthur Hobli,</p>
              <p>Bengaluru – 560103, India</p>
            </div>
            <div>
              <p>CIN: U72300KA2007PTC041799</p>
              <p>
                Telephone: <a href="">+91-80-61561999</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
