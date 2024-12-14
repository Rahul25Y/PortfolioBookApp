import React from 'react'
import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from '../Pages/Cover';
import coverImg from '../assets/cover.png'
import FirstPage from '../HeroSection/FirstPage';
import Skills from '../Skills/Skills';
import Services from '../Services/Services';
import About from '../About/About';
import Projects from '../Projects/Projects';
import EndImg from '../assets/last-page.png'

import ProjectImg1 from "../assets/car-rental.jpg";
import ProjectImg2 from "../assets/WhatsApp Image 2024-12-12 at 10.08.40 PM.jpeg";
import ProjectImg3 from "../assets/car-rental.jpg";
import ProjectImg4 from "../assets/cooking-3117871_1280.jpg";

function MyBook() {
    const ProjectData = [
        {
          name: "Car Rental website",
          description: "Complete Responsive website using React js and Tailwind CSS",
          image: ProjectImg1,
          previewLink: "https://car-rental-app-lake.vercel.app/",
        },
        {
          name: "PortFolio website",
          description: "Complete Responsive website using React js and Tailwind CSS",
          image: 'https://www.mysphere.net/wp-content/uploads/2022/06/MySphere-Build-a-Student-Profile-Digital-Portfolio-1024x576.jpg',
          previewLink: "https://my-port-folio-jade.vercel.app/",
        },
      ];
      const ProjectData2 = [
        {
          name: "FoodOrderClone",
          description: "Complete Responsive website using React js and Tailwind CSS",
          image: 'https://thumbs.dreamstime.com/z/healthy-eating-tips-infographic-chart-food-balance-proper-nutrition-proportions-plan-your-meal-balanced-dieting-333970205.jpg?w=768',
          previewLink: "https://foodie-hub-clone.vercel.app/",
        },
        {
          name: "Recipe website",
          description: "Complete Responsive website using React js and Tailwind CSS",
          image: ProjectImg4,
          previewLink: "https://recipe-finder-app-henna.vercel.app/",
        },
      ];
  return (
    <HTMLFlipBook width={600} height={670} showCover={true}>
     <Page number={1}>
     <Cover coverImg={coverImg} title="My Portfolio" />
     </Page>
     <Page number={2}>
      <FirstPage/>
     </Page>
     <Page number={3}>
     <Skills/>
     </Page>
     <Page number={4}>
     <About/>
     {/* <Services/> */}
     </Page>
     <Page number={5}>
     <Services/>
     </Page>
     <Page number={6}>
     <Projects ProjectData={ProjectData}/>
     </Page>
     <Page number={7}>
     <Projects ProjectData={ProjectData2}/>
     </Page>
     <Page number={8}>
        <Cover coverImg={EndImg} title="Thanks 🧭" />
      </Page>
     
        </HTMLFlipBook>
  )
}

export default MyBook
