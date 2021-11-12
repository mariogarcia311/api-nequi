import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router'
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarText, NavbarToggler, NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';
export const Layout = ({children}) => {
    const [open, setOpen] = useState(false)
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
           
            <div >
                <Navbar
                    color="dark"
                    dark
                    expand="sm"
                    fixed="top"
                    light
                >
                    <NavbarBrand href="/">
                    API Nequi
                    </NavbarBrand>
                    <NavbarToggler onClick={()=>{setOpen(!open)}} />
                    <Collapse navbar isOpen={open}>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <Link href="/">
                                <NavLink href=''>
                                    Nequi
                                </NavLink>
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link href="/generateQR">
                                <NavLink href=''>
                                    Generar QR
                                </NavLink>
                            </Link>
                        </NavItem>
                        {/* <UncontrolledDropdown
                        inNavbar
                        nav
                        >
                        <DropdownToggle
                            caret
                            nav
                        >
                            Options
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                            Option 1
                            </DropdownItem>
                            <DropdownItem>
                            Option 2
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            Reset
                            </DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown> */}
                    </Nav>
                    <NavbarText>
                        Esto es un ambiente de pruebas
                    </NavbarText>
                </Collapse>
                </Navbar>
            </div>
            {children}
        </>
    )
}
