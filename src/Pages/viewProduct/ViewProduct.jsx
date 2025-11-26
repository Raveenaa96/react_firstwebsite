import { useParams,useLocation } from "react-router-dom"
import {useState,useEffect} from 'react'


export function ViewProduct(){

     const [productData,setProductData] = useState();
     const {id} = useParams();
     const { search } = useLocation();
     if (search) {
          const query = new URLSearchParams(search);
          var productID = query.get("productId");
     }
     else {
          
          console.log("id==>",id)
     }
     
     useEffect(()=>{
         let productList = JSON.parse(localStorage.getItem('Products'))
         let filterProduct = productList.filter(item => item.id == productID )
         setProductData(filterProduct[0])
         console.log("setProductData",filterProduct[0])
         
          
     },[])

    return <div>
               <div className="heading text-center">
                    <span className = "text-secondary">View Full Information</span>
               </div>
               <div className="d-flex flex-row pt-3">
                    <div className="col-md-4">
                         <img src={productData?.image} className="img-fluid"/>
                    </div>
                         <div className="col-md-8">
                         <p className="h3 text-primary">{productData?.title}</p>
                         <p className="h5">Rating: <span  className="text-warning">4.2</span></p>
                         <hr></hr>
                         <p>Description: {productData?.description}</p>
                         <hr></hr>
                         
                    </div>                    
               </div>
          </div>
}