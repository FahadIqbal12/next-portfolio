import Image from 'next/image';
import { Stack } from "@mui/material"
import Main from '@/components/Main';


export default function Home() {
  return (
    <Stack className="items-center" sx={{ color: '#fff' }}>
      <Stack sx={{width:{md:1024,sm:'100%',xs:'100%'},}} >
      <Main />
      </Stack>
    </Stack>
  )
}
