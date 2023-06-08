import Image from "next/image";
import Link from "next/link";
import hero from "../../public/assets/hero.png"

export default function HomePage() {
    return <div className="grid-halves h-screen-navbar">
        <div className="bg-teal border-right">
            <div className="column-padding">
                <div className="tablet-centered">
                    <div className="content-grid home-hero">
                        <h1>The most <br/> epic product</h1>
                        <p className="section-subtitle">All the most epic things on the Internet, all in one place</p>
                        <Link href="/products" className="large-button">
                            <div className="large-button-text">Explore Product</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-salmon">
            <div className="column-padding centered">
                <div className="callout-wrap">
                    <Image src={hero}  alt="calloutimg" className="callout-image"></Image>
                </div>
            </div>
        </div>
    </div>
}
