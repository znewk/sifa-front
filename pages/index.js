import Head from "next/head";
import Header from "../src/components/Header";
import MiradouroHillsIntro from "../src/components/ MiradouroHillsIntro";

const Index = () => {
    return (
        <div>
            <Head>
                <title>Homepage - Şifa Construction</title>
                <link rel="icon" href="/icon.png" />
            </Head>
            <Header/>

            <MiradouroHillsIntro/>
        </div>
    )
}

export default Index;