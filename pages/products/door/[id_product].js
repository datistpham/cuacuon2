import axios from "axios"
import Wrapper from "../../components/ComponentDetailProduct/Wrapper"
import Navigation from "../../components/Navigation"
import { SERVER_URL } from "../../_app"
import { useRouter } from "next/router"

const DetailProduct= ({data})=> {
    const router= useRouter()
    return (
        <div className="djksajsaiowsjasasa" style={{width: "100%"}}>
            {
                !router.query.is_admin === true && !router.query.is_edit=== true &&
                <Navigation />
            }
            <Wrapper is_admin={router.query.is_admin} is_edit={router.query.is_edit} {...data} />
        </div>
    )
}

export default DetailProduct

export async function getServerSideProps(context) {
    // console.log(context)
    const res = await axios({
        url: `${SERVER_URL}/api/v1/get/detail/door`,
        method: "GET",
        responseType: "json",
        params: {
           _id: context.query.id_product
        }
    })
    const data = await res.data;
    return {
      props: { data },
    };
  }
  