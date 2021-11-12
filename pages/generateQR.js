import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalDialog, ModalTitle, FormGroup, Label, Input, ModalFooter, Spinner } from 'reactstrap'
import { Layout } from '../components/Layout'
import QRCode from 'qrcode'
import qrCode from '../business/qrCode'
import Cookies from 'universal-cookie'
const generateQR = () => {
    const [state, setstate] = useState({value:''});
    const [openModal, setOpenModal] = useState(false);
    const [src, setSrc] = useState('');
    const [loading, setLoading] = useState(false)
    const cookies=new Cookies;
    const handleChange=async(e)=>{
        setstate({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit=async(e)=>{
        setLoading(true)
        e.preventDefault()
        console.log(state)
        setOpenModal(true)
        const response=await qrCode.fetchGenerateCodeQR(state.value,cookies.get('code'))
        const qr=response.body.ResponseMessage.ResponseBody.any.generateCodeQRRS.codeQR;
        QRCode.toDataURL('bancadigital-'.concat(qr)).then((e)=>{
            setSrc(e)
        })
        setLoading(false)
    }

    return (
        <Layout>
            <div className='row flex align-items-center justify-content-center col-12 mt-5'>
                <div className='col-12 col-sm-6 col-md-5 col-lg-4 p-5'>
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Pagar mediante nequi</h5>
                            <form className="mt-3" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="value" className="form-label">Valor</label>
                                    <input onChange={handleChange} autoComplete='off' type="text" className="form-control" id="value" name="value" aria-describedby="emailHelp" required/>
                                </div>
                                {/* <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" required/>
                                </div> */}
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required/>
                                    <label className="form-check-label" htmlFor="exampleCheck1" >Aceptar términos y condiciones</label>
                                </div>
                                <button type="submit" className="btn btn-primary"  >Generar código Qr</button>
                            </form>
                        </div>
                    </div>

                    <Modal isOpen={openModal} >
                        <ModalHeader>
                            código QR
                        </ModalHeader>
                        {loading ?
                            <ModalBody className='row flex align-items-center justify-content-center spinnerModal'>
                                <Spinner 
                                style={{
                                        width: "277px",
                                        height: "277px",
                                        border: "10px solid currentColor",
                                        borderRightColor:"transparent "
                                    }}
                                color='primary' 
                                />
                            </ModalBody>
                            :
                            <ModalBody className='row flex align-items-center justify-content-center'>
                                <img src={src}/>
                            </ModalBody>
                        }
                        <ModalFooter >
                            {/* <Button color="primary">Iniciar Sesión</Button> */}
                            <div className='flex align-items-center justify-content-center'>
                            <Button color="secondary" onClick={()=>{setOpenModal(false)}}>Cerrar</Button>
                            </div>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
            <style jsx>{`
        html,body { 
        height: 100%; 
        }
    
        img{
            max-width:300px;
        }
        .spinnerReactstrap{
            width:100px !important;
            height: 100px !important; 
            border: 10px solid currentColor !important;  
            border-right-color:transparent !important;
        }
        .spinnerModal{
            height: auto%;
        }
        `}</style>
      
        </Layout>
    )
}

export default generateQR
