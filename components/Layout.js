import React from 'react'
import Head from 'next/head'
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
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar w/ text</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" onClick={cerrar} href="">cerrar sesión</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <main>{children}</main>
        </>
    )
}
