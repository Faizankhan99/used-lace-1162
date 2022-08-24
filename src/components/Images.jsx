import React from 'react'
import img1 from "../../public/1.png"
import img2 from "../../public/2.png"
import img3 from "../../public/3.png"
import img4 from "../../public/4.png"
import img5 from "../../public/5.png"
import img6 from "../../public/6.png"
import img7 from "../../public/2.1.png"
import img8 from "../../public/2.2.png"
import img9 from "../../public/2.3.png"
import img10 from "../../public/2.4.png"
import img11 from "../../public/2.5.png"
import img12 from "../../public/2.6.png"
import Topbrand from "../../public/Topbrand.png"
import Topbrand3 from "../../public/Topbrand3.png"
import Topbrand4 from "../../public/Topbrand4.png"
import img13 from "../../public/3.1.png"
import img14 from "../../public/3.2.png"
import img15 from "../../public/3.3.png"
import img16 from "../../public/3.4.png"
import img17 from "../../public/3.5.png"
import img18 from "../../public/3.6.png"



import {SimpleGrid,Img} from "@chakra-ui/react"


export function Images() {
    const imgTop= [
        {src:img1},
        {src:img2},
        {src:img3},
        {src:img4},
        {src:img5},
        {src:img6},
 ]

    return (
        <div >
          <SimpleGrid mt="10px" columns={[2, 3, 6]} spacing='40px'>
                  {imgTop.map((elem) =>(
                    <img key={elem.src} src={elem.src}/>
                    ))}
            </SimpleGrid>  
               <Img  mt="20px" src={Topbrand} alt="" />
        </div>
   )
}
export  function Image2() {
    const imgTop= [
        {src:img7},
        {src:img8},
        {src:img9},
        {src:img10},
        {src:img11},
        {src:img12},
 ]

    return (
        <div >
          <SimpleGrid mt="20px" columns={[3, 4, 6]} spacing='40px'>
                  {imgTop.map((elem) =>(
                    <img key={elem.src}  src={elem.src}/>
                    ))}
            </SimpleGrid>  
               <Img  mt="10px" src={Topbrand3} alt="" />
        </div>
   )
}



export  function Image3() {
    const imgTop= [
        {src:img13},
        {src:img14},
        {src:img15},
        {src:img16},
        {src:img17},
        {src:img18},
 ]

    return (
        <div >
          <SimpleGrid mt="20px" columns={[3, 4, 6]} spacing='40px'>
                  {imgTop.map((elem) =>(
                    <img key={elem.src}  src={elem.src}/>
                    ))}
            </SimpleGrid>  
               <Img  mt="10px" src={Topbrand4} alt="" />
        </div>
   )
}

