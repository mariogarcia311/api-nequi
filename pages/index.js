import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {decode as base64_decode, encode as base64_encode} from 'base-64';
import IONequiToken from '../business/ioToken';
import { useEffect, useState } from 'react';
import qrCode from '../business/qrCode';
import { Layout } from '../components/Layout';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap';
import { ItemQR } from '../components/ItemQR';

const cookies=new Cookies;
export default function Home() {
  const [lista, setLista] = useState([])
  const flujocompleto=async()=>{
    const merchant=cookies.get('code');
    console.log(merchant)
    const response=await qrCode.fetchListLogsNequi(merchant)
    setLista(response.body.reverse())
  
  }
  useEffect(async() => {
    flujocompleto()
  }, [])
  console.log(lista)

  return (
    <Layout>
      <Head>
        <title>QR Nequi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>.</div>
      <div className='row d-flex justify-content-center mt-5'>
        {lista.map((e)=>{
          console.log(e)
        return <ItemQR item={e}/>
        })  }
      </div>
    </Layout>
  )
}
