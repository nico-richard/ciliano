import Header from "@/components/Header";
import Video from "@/components/Video";

export default function Home() {
    return (
        <>
            <Header/>
            <div className="w-full">
                <img src={'/main.png'} alt={'main'} className="w-full h-auto"/>
            </div>
            <Video/>
        </>
    );
}
