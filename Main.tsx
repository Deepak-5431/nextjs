
import Image from "next/image";


const Main: React.FC =  () => {

const googlelogo: string ="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

  return(
   <div className="items-center flex flex-col mt-28">
    <Image
    alt="google"
    src={googlelogo}
    height={100}
    width={270}
    />
    <form>
      
    </form>
    </div>
  )
}

export default Main;