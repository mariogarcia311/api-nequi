import Head from 'next/head'
import React, { useState } from 'react'
import Cookies from 'universal-cookie';


export default function iniciar  ()  {
    const cookies=new Cookies;
    const [state, setstate] = useState({celPhone:''})
    const handleChange=async(e)=>{
        setstate({
            ...state,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        console.log(state)
        cookies.set('number',state.celPhone)
        window.location.href='/'
    }

    return (
        <div className="container">
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />  
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </Head>
            <div className="global-container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Ingrese su número de celular</h3>
		<div className="card-text">
		
			{/* <div className="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div>  */}
			<form>
			
				<div className="form-group">
					<label htmlFor="celPhone">Celular</label>
					<input 
                    type="celPhone" 
                    className="form-control form-control-sm" 
                    id="celPhone" 
                    name="celPhone" 
                    aria-describedby="celPhone"
                    onChange={handleChange}
                    />
				</div>
				{/* <div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<a href="#" style={{float:'right',fontSize:'12px'}}>Forgot password?</a>
					<input type="password" className="form-control form-control-sm" id="exampleInputPassword1"/>
				</div> */}
				<button 
                type="submit" 
                className="btn btn-primary btn-block"
                onClick={handleSubmit}
                >Sign in</button>
				
				<div className="sign-up">
					Don't have an account? <a href="#">Create One</a>
				</div>
			</form>
		</div>
	</div>
</div>
</div>
<style jsx>{`
       html,body { 
        height: 100%; 
    }
    
    .global-container{
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #f5f5f5;
    }
    
    form{
        padding-top: 10px;
        font-size: 14px;
        margin-top: 30px;
    }
    
    .card-title{ font-weight:300; }
    
    .btn{
        font-size: 14px;
        margin-top:20px;
    }
    
    
    .login-form{ 
        width:330px;
        margin:20px;
    }
    
    .sign-up{
        text-align:center;
        padding:20px 0 0;
    }
    
    .alert{
        margin-bottom:-30px;
        font-size: 13px;
        margin-top:20px;
    }
      `}</style>
      </div>
        
    )
}
