import React from 'react';
import Image from 'next/image';
import { Stack, Typography, Button } from '@mui/material';
import Pic from '../assets/pic.png';
import Tech from './tech';

const Main = () => {

  const about=`Hi, I am Fahad a self-taught developer who has a passion for
  coding. I started learning to code when I was in 7th grade.
  I have made many projects in multiple domains from Web
  development to App development. When I was in grade 9th, I built a
  SaaS from scratch and was able to scale it. But I always wanted to
  work on some futuristic projects and Blockchain really caught my
  attention. And I started learning Blockchain and made amazing
  projects. Recently, I won 2nd 
  prize in a Hackathon, where I built a
  blockchain based health care system.`


  return (
    <Stack sx={{mt:'35%',alignItems:{xs:'center',sm:'center',md:'flex-start'}}}>
    <div>
    <Typography  sx={{fontSize: {md:20,sm:15,xs:10},color:"#00A2FF",fontFamily:'monospace', }}>Hi, I am</Typography>
      <Typography className='text' sx={{ fontWeight: 'bold', fontSize: {md:75,sm:35,xs:25},lineHeight:1,mt:2}}>Fahad Iqbal Zafar. </Typography>
       <Typography className='text animate-pulse hover:opacity-100' sx={{ fontWeight: 'bold', fontSize: {md:75,sm:35,xs:25},lineHeight:1.1,mt:2}}>I build things for the future. </Typography>
        <Typography sx={{ fontSize: { md: 18, sm: 18, xs: 10 }, width: { md: 600, sm: 500, xs: 300 }, mt: 3, color: '#BDBDBD' }}>I'm a self-taught computer programmer who has a passion for coding. I'm always eager to learn new things and keep up with the latest trends in technology.</Typography>
      <Button variant='outlined' className='hover:border' sx={{mt:3,fontWeight:'bold',border:2,p:{md:2,sm:1,xs:1},borderRadius:{md:5,sm:3,xs:2},fontSize:{xs:10,sm:12,md:15}}} > Checkout my work</Button>
      </div>
      
        <Stack sx={{mt:{md:50,sm:20,xs:10}}}>
          <Typography sx={{ fontSize: { md: 40, sm: 30, xs: 20 }, color: "#00A2FF", fontWeight: "bold" }}>About me</Typography>
          <Stack sx={{flexDirection:'row'}}>
            <Typography sx={{ width: { md: 600, sm: 500, xs: 300 }, fontSize: { md: 18, sm: 18, xs: 10 } }}>{about}</Typography>
            <Stack sx={{width:{xs:0,md:300},ml:5}}>
            <Image className='grayscale w-48 hover:grayscale-0' src={Pic} alt=''  />
            </Stack>
          </Stack>
      </Stack>
      
      <Stack sx={{ mt: { md: 30, sm: 20, xs: 10 }, width: { xs: '90%', sm:"80%"}}}>
          <Typography sx={{ fontSize: { md: 40, sm: 30, xs: 20 }, color: "#00A2FF", fontWeight: "bold" }}>Tech Stack</Typography>
          <Stack sx={{flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
          {
            Tech.map((item,index) => {
              return (

                <Stack sx={{width:50,m:1}}>
                <img src={item.img_url} />
                </Stack>

              )
            })
          }
          </Stack>
      </Stack>
     

  </Stack>
  )
}

export default Main;
