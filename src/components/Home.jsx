import { Button } from "@chakra-ui/react";

import { DrawerExample } from "../components/Drawer";
import React from "react";
import homeBanner from "../../public/homeBanner.png";
import homeBanner2 from "../../public/homeBanner2.png";
import Topbrand2 from "../../public/topbrand2.png";
import { Image3, Images } from "./Images";
import { Image2 } from "./Images";
import { Image4 } from "./Images2";
export default function Home() {
  return (
    <div>
      <img src={homeBanner} alt="" />
      <img src={homeBanner2} alt="" />
      <img src={Topbrand2} alt="" />
      <Images />
      <Image2 />
      <Image3 />
      <Image4 />
    </div>
  );
}
