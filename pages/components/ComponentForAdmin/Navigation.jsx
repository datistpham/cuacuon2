import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"

const Navigation = (props) => {
  const router= useRouter()
  return (
    <div className="fjkopdjaopsasasa" style={{width: "100%", display: "flex", alignItems: "center"}}>
        <div style={{padding: 20, margin: 8, borderRadius: 80, border: '1px solid #e7e7e7'}}>
            <Link className="accordion" href={"/admin/manage-products"}>
                <a><p style={{color: router.pathname=== "/admin/manage-products" ? "#2e89ff" : "#000", padding: "4px 12px", borderRadius: 80, border: "1px solid #fff", fontSize: 18}}>Quản lí sản phẩm</p></a>
            </Link>
        </div>
        <div style={{padding: 20, margin: 8, borderRadius: 80, border: '1px solid #e7e7e7'}}>
            <Link href={"/admin/upload-products"}>
                <a><p style={{color: router.pathname=== "/admin/upload-products" ? "#2e89ff" : "#000", padding: "4px 12px", borderRadius: 80, border: "1px solid #fff", fontSize: 18}}>Đăng sản phẩm</p></a>
            </Link>
        </div>
        <div style={{padding: 20, margin: 8, borderRadius: 80, border: '1px solid #e7e7e7'}}>
            <Link href={"/admin/user-contact"}>
                <a><p style={{color: router.pathname=== "/admin/user-contact" ? "#2e89ff" : "#000", padding: "4px 12px", borderRadius: 80, border: "1px solid #fff", fontSize: 18}}>Người dùng muốn tư vấn</p></a>
            </Link>
        </div>
    </div>
  )
}

export default Navigation