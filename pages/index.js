import Head from "next/head";
import Header from "../src/components/Header";
import MiradouroHillsIntro from "../src/components/ MiradouroHillsIntro";
import WhoWeAre from "../src/components/WhoWeAre";

const Index = () => {
    return (
        <div>
            <Head>
                <title>Homepage - Şifa Construction</title>
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header/>

            <MiradouroHillsIntro/>
            <WhoWeAre/>
        </div>
    )
}

export default Index;