import Head from 'next/head'
import { Inter } from '@next/font/google'
import Drop from '/components/Drop.jsx'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Web3 Dernegi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoS.jpeg" />
      </Head>
      <div className=" w-full min-w-[200px] min-h-[1200px] h-full ">
            <img
              src='/hatayB.jpeg'
              className=' w-full h-full -z-10 fixed '
            />
        <div className=' text-white font-semibold text-center flex flex-col '>
          <div className=' pt-[1rem] flex flex-col  mx-[5rem] max-sm:mx-[1rem] h-screen '>
            <img
              src='/web3.png'
              className=' max-w-[600px] mx-auto w-full shadow-lg shadow-black'
            
            />
            <div className=' flex text-2xl py-[1rem] '>
            The Southeast region of Turkiye has been hit by the earthquakes with magnitude 7.8 and 7.5, followed by more than 100 aftershocks, which affected more than 20 million people directly. 
            </div>
            {/* <div className=' flex text-sm font-light'>
              The first earthquake registered as 7.8, classified as &apos;major&apos; on the official magnitude scale. It broke along about 100km (62 miles) of the fault line, causing severe damage to buildings near the fault. Many official organizations, societies, community organizations, and government offices are actively collecting donations to repair damages and help the lives of those affected by the earthquake. In addition to physical currencies, Web3.0 Technologies Association&apos;s digital money/crypto money collection calls on social media and many community moves, Turkey&apos;s respected non-governmental organization Ahbap, Turkey&apos;s largest humanitarian aid organization Kızılay and Turkey&apos;s Emergency Management Presidency, created their crypto wallets.
            </div> */}
            <div className=' flex text-sm font-light justify-center pt-1 flex-row flex-wrap'>
              Major earthquakes and aftershocks caused a widespread destruction. The death toll is rising. Millions of people are living in temporary shelters, cars and containers with very limited supplies of food, water, clothes and electricity. To support the lives affected by the earthquake, NGOs started to collect donations. As Web3.0 Technologies Association, we encourage you to spread the news & donate to the official crypto wallet addresses of  &nbsp; <a href='https://twitter.com/Kizilay/status/1623619343014674432' className=' font-semibold text-red-500 hover:text-red-400'>Kizilay (Red Crescent)</a>, &nbsp; <a href='https://www.afad.gov.tr/depremkampanyasi2' className=' font-semibold text-blue-500 hover:text-blue-400'>AFAD (Turkiye Emergency Management Presidency)</a>, &nbsp;<a href='https://twitter.com/ahbap/status/1622963311514996739' className=' font-semibold text-green-500 hover:text-green-400'>Ahbap</a>.            
            </div>
            <div className=' flex justify-center mt-5'>
              <Drop/>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
