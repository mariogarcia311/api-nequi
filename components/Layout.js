import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'
export const Layout = ({children}) => {

    const router = useRouter()
    const cookies=new Cookies;
    const validation=async()=>{
        if(!cookies.get('number')){
            router.push('/iniciar')
        }
    }
    const cerrar=async()=>{
        cookies.remove('code',{path:'/'})
        cookies.remove('number',{path:'/'}) 
    }

    validation()

    return (
        <>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />  
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </Head>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="nav-item" href="/">
                    <a className="navbar-brand" href="#">Navbar w/ text</a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className="nav-item" href="/">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </Link>
                        <Link className="nav-item" href="/generateQR">
                        <a className="nav-link" >Generar QR</a>
                        </Link>
                        <Link className="nav-item" href="/generateQR">
                        <a className="nav-link" onClick={cerrar} href="">cerrar sesión</a>
                        </Link>
                    </ul>
                    </div>
                </div>
            </nav>
            {children}
        </>
    )
}
