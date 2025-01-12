import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import Image from "next/image";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg"
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg"
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg"
import Avatar from "@/components/Avatar";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (<section>
        <div className="container ">
            <div className="flex justify-center"><Tag>Features</Tag></div>
            <h2 className="text-6xl font-medium text-center mt-6">where power meets {""}<span className="text-lime-400">simplicity</span></h2>
            <div className="mt-12 grid grid-col-1 gap-8 ">
                <FeatureCard title="Real-time Collaboration"
                    description="work together seamlessly with conflict-free team editing"

                >
                    <div className="aspect-video flex items-center justify-center">
                        <Avatar className="z-40">
                            <Image src={avatar1} alt="image" className="rounded-full" />
                        </Avatar>
                        <Avatar className="-ml-6 border-indigo-500 z-30 ">
                            <Image src={avatar2} alt="image" className="rounded-full"/>

                        </Avatar>
                        <Avatar className="-ml-6 border-amber-500 z-20">
                        <Image src={avatar3} alt="image" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-6 border-transparent " >
                            <div className="flex size-full bg-neutral-700 rounded-full items-center justify-center gap-1">
                                {Array.from({length:3}).map((_, i)=>(
                                    <span className="size-1.5 rounded-full bg-white inline-flex" key={i}>
                                        
                                    </span>

                                ))}
                            </div>
                            
                        </Avatar>
                        <div>

                        </div>
                    </div>
                </FeatureCard>
                <FeatureCard title="Interactive Prototypingn"
                    description="Engage your clients with prototypes that react to user action"
                >
                    <div className="aspect-video flex items-center justify-center">
                        <h1 className="text-4xl font-extrabold text-white/20 text-center">We've achieved<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text inline-flex">incredible</span>  growth this year</h1>
                    </div>
                </FeatureCard>
                <FeatureCard title="Keyboard Quick Actions"
                    description="work together seamlessly with conflict-free team editing"
                ></FeatureCard>
            </div>

        </div>
    </section>
    )
}
