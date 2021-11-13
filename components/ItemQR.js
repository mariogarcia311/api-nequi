import React, { useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader, Spinner } from 'reactstrap'
import qrCode from '../business/qrCode';

export const ItemQR = ({item}) => {
    const [openModal, setOpenModal] = useState(false);
    const [loading, setLoading] = useState(false)
    const [statusTransaction, setStatusTransaction] = useState('')
    console.log(item)
    const viewStatus=async()=>{
        setOpenModal(true);
        setLoading(true);
        const statusnequi= await qrCode.fetchStatus(item.responsedate,item.messageid,item.codeqr)
        const any=statusnequi.body.ResponseMessage.ResponseBody.any.getStatusPaymentRS
        if(!any){
        setStatusTransaction(statusnequi.body.ResponseMessage.ResponseHeader.Status.StatusDesc)
        }else{
            if(statusnequi.body.ResponseMessage.ResponseBody.any.getStatusPaymentRS.status=='33'){
                setStatusTransaction('En proceso')
            }else{
                setStatusTransaction('Realizado')
            }
        }
        const fecha=new Date()
        console.log(fecha)
        setLoading(false);
    }
    
    
    return (
        <div className='col-md-7 col-10'>
          <Card className='mb-5'>
            <CardHeader>
                ID transacción: {item.id}
            </CardHeader>
              <CardBody className='px-sm-4'>
              <CardTitle tag="h5">
                  Estado
              </CardTitle>
              <CardText>
              fecha y hora de transacción: {item.responsedate}
              </CardText>
                <CardText>
                  Para confirmar estado de transacción haz click en confirmar estado
                </CardText>
                <Button onClick={viewStatus}>
                    confirmar estado
                </Button>
              </CardBody>
              <CardFooter>
              <CardTitle tag="h6">
              valor de transacción: {item.value}
              </CardTitle>
              
              </CardFooter>
            </Card>
            <Modal isOpen={openModal} >
                        <ModalHeader>
                            Estado
                        </ModalHeader>
                        {loading ?
                            <ModalBody className='row flex align-items-center justify-content-center spinnerModal'>
                                <Spinner 
                                style={{
                                        width: "50.4px",
                                        height: "50.4px",
                                        border: "8px solid currentColor",
                                        borderRightColor:"transparent "
                                    }}
                                color='primary' 
                                />
                            </ModalBody>
                            :
                            <ModalBody className='row flex align-items-center justify-content-center'>
                                <h2>{statusTransaction}</h2>
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
    )
}
