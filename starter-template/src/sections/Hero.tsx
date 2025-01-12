import Button from "@/components/Button";
import designExample1Image from '@/assets/images/design-example-1.png'
import designExample2Image from '@/assets/images/design-example-2.png'
import Image from "next/image";
import Pointer from "@/components/Pointer";
export default function Hero() {
    return(
     <section className="py-24 overflow-x-clip" >
        <div className="container relative">
           <div className="absolute -left-32 top-16 hidden lg:block">
           <Image src={designExample1Image} alt="Design example image" className="h-96 w-auto" />
            </div>
            <div className="absolute -right-40 -top-16 hidden lg:block">
           <Image src={designExample2Image} alt="Design example image" className="h-96 w-auto" />
            </div>
            <div className="absolute left-56 top-96 hidden lg:block">
                <Pointer name="Andrea"/>
            </div>
            <div className="absolute right-80 -top-4 hidden lg:block">
                <Pointer name="Bryan" color="red"/>
            </div>

            <div className="flex justify-center">
            <div className="inline-flex px-3 py-1 bg-gradient-to-r from-purple-400 to bg-pink-400 rounded-full font-semibold text-neutral-950 ">
              ✨ $7.5M seed round raised
            </div>
            </div>
            <h1 className="flex text-center text-6xl md:text-7xl lg:text-8xl py-8 font-semibold ">Impactful design, created effortlesssly</h1>
            <p className="text-white/50 text-center text-xl mt-6 max-w-2xl mx-auto">Design tools shouldn't slow you down. Layers combines powerful
                 features with an intuitive interface that keeps you in your creative flow.
            </p>
            <form className="flex rounded-full border border-white/15 p-2   my-8 max-w-lg mx-auto">
                <input
                type="email"
                placeholder="Enter your email"
                className=" bg-transparent font-semibold flex-1 "
                />
                <Button variant="primary" className="whitespace-nowrap " size="sm">Sign Up</Button>
                
            </form>

        </div>

    </section>
)}
