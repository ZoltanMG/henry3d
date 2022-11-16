import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './slide.css'

export default function Slide() {
    const images = [
        {
            link: "https://cdnb.artstation.com/p/assets/images/images/054/777/585/large/henry-fabian-varon-cortes-zbrush-document.jpg?1665356465",
            nombre: "nombre1"
        },
        {
            link: "https://cdnb.artstation.com/p/assets/images/images/053/999/471/large/henry-fabian-varon-cortes-zbrush-document-copia.jpg?1663536649",
            nombre: "nombre2"
        },
        {
            link: "https://cdna.artstation.com/p/assets/images/images/053/734/178/large/henry-fabian-varon-cortes-wipss.jpg?1662917227",
            nombre: "nombre3"
        },
        {
            link: "https://cdnb.artstation.com/p/assets/images/images/055/571/753/large/henry-fabian-varon-cortes-wip2.jpg?1667265822",
            nombre: "nombre4"
        }
    ]
    return (
        <>
            <Carousel
                showArrows={true}
                transitionTime={500}
                autoPlay={true}
                interval={4000}
                emulateTouch={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                dynamicHeight={true}
            >
                {images.map((item, index) => {
                    return (
                        <div className='contenedorImagen' key={index}
                        >
                            <div>
                                <img src={item.link} alt={index} style={{ maxHeight: '75vh', width: 'auto' }} />
                            </div>
                        </div>
                    )
                })}
            </Carousel>
        </>
    )
}