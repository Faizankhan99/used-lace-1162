import { SimpleGrid, Img, Box } from "@chakra-ui/react";
import styles from "../components/Nav.module.css";
import { ModalComponent } from "./Modals";
import img1 from "../../public/4.1.png";
import img2 from "../../public/4.2.png";
import img3 from "../../public/4.3.png";
import img4 from "../../public/4.4.png";
import img5 from "../../public/4.5.png";
import img6 from "../../public/4.6.png";
import img7 from "../../public/5.1.png";
import img8 from "../../public/5.2.png";
import img9 from "../../public/5.3.png";
import img10 from "../../public/5.4.png";
import img11 from "../../public/5.5.png";
import img12 from "../../public/5.6.png";
import img13 from "../../public/6.1.png";
import img14 from "../../public/6.2.png";
import img15 from "../../public/6.3.png";
import img16 from "../../public/6.4.png";
import img17 from "../../public/6.5.png";
import img18 from "../../public/6.6.png";
import img20 from "../../public/7.1.png";
import img21 from "../../public/7.2.png";
import img22 from "../../public/7.3.png";
import img23 from "../../public/7.4.png";
import img24 from "../../public/7.5.png";
import img25 from "../../public/7.6.png";
import img26 from "../../public/8.1.png";
import img27 from "../../public/8.2.png";
import img28 from "../../public/8.3.png";
import img29 from "../../public/8.4.png";
import img30 from "../../public/8.5.png";
import img31 from "../../public/8.6.png";
import img32 from "../../public/9.1.png";
import img33 from "../../public/9.2.png";
import { useState } from "react";

export function Image4() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState({});

  const handleClick = (item) => {
    setIsModalVisible(true);
    setSelectedBox(item);
  };

  const imgTop = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 },
    { src: img10 },
    { src: img11 },
    { src: img12 },
    { src: img13 },
    { src: img14 },
    { src: img15 },
    { src: img16 },
    { src: img17 },
    { src: img18 },
    { src: img20 },
    { src: img21 },
    { src: img22 },
    { src: img23 },
    { src: img24 },
    { src: img25 },
    { src: img26 },
    { src: img27 },
    { src: img29 },
    { src: img31 },
    { src: img30 },
    { src: img28 },
  ];

  return (
    <div>
      <SimpleGrid mt="20px" columns={[3, 4, 6]}>
        {imgTop.map((elem) => (
          <div onClick={() => handleClick(elem)}>
            <img className={styles.img} key={elem.src} src={elem.src} />
          </div>
        ))}
      </SimpleGrid>

      <div className={styles.last}>
        <img src={img32} alt="" />
        <img src={img33} alt="" />
      </div>
      <ModalComponent
        data={selectedBox}
        isOpen={isModalVisible}
        setIsOpen={setIsModalVisible}
      />
    </div>
  );
}
