import { ProductInfo } from "./ListProducts"

const MainList= (props)=> {
    return (
        <div className="djsjaklsaqawawfdsad" style={{width: "100%", display: "flex", alignItems: "center", flexWrap: "wrap"}}>
            {props?.data?.map((item, key)=> <ProductInfo key={key} {...item} width={"20%"} />)}
            {props?.data2?.map((item, key)=> <ProductInfo key={key} {...item} width={"20%"} />)}
        </div>
    )
}

export default MainList
