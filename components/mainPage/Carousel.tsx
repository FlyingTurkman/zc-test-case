import useEmblaCarousel from "embla-carousel-react"
import { useEffect } from "react"
import Card from '../ui/Card'
import dergiPreview from '../../src/assets/dergi-preview.png'
import Badge from '../ui/Badge'
import H2 from "../ui/H2"
import Button from "../ui/Button"










export default function Carousel() {

    const [ emblaRef, emblaApi ] = useEmblaCarousel()

    useEffect(() => {
        if (emblaApi) {
        console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])
    
    return (
        <div
        className="container carousel-content"
        >
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide">
                        <Card>
                            <Card.Image>
                                <img
                                src={dergiPreview}
                                className="object-fit-contain"
                                />
                            </Card.Image>
                            <Card.Content
                            className="d-flex flex-column gap-2"
                            >
                                <div
                                className="d-flex flex-row align-items-start justify-content-between w-100"
                                >
                                    <div>
                                        pdf
                                    </div>
                                    <Badge
                                    variant="teal"
                                    >
                                        Yeni
                                    </Badge>
                                </div>
                                <Badge
                                className="me-auto"
                                >
                                    Dergi
                                </Badge>
                                <label
                                className="text-primary fw-bold"
                                >
                                    Teknoloji ve Dijital Dergisi
                                </label>
                                <div
                                className="d-flex flex-row flex-wrap gap-2 my-2"
                                >
                                    <div
                                    className="d-flex"
                                    >
                                        <label>
                                            Cilt: <b>1</b>
                                        </label>
                                    </div>
                                    <div
                                    className="d-flex"
                                    >
                                        <label>
                                            Sayı: <b>1</b>
                                        </label>
                                    </div>
                                    <div
                                    className="d-flex"
                                    >
                                        <label>
                                            <b>Aralık 2022</b>
                                        </label>
                                    </div>
                                </div>
                                <div
                                className="d-flex flex-row align-items-center gap-1 ms-auto"
                                >
                                    <Button
                                    variant="secondary"
                                    size="icon"
                                    >
                                        E
                                    </Button>
                                    <Button
                                    size="icon"
                                    >
                                        D
                                    </Button>
                                    <Button
                                    size="icon"
                                    >
                                        G
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>
                    </div>
                    <div className="embla__slide">Slide 2</div>
                    <div className="embla__slide">Slide 3</div>
                    <div className="embla__slide">Slide 4</div>
                    <div className="embla__slide">Slide 5</div>
                    <div className="embla__slide">Slide 6</div>
                    <div className="embla__slide">Slide 7</div>
                </div>
            </div>
        </div>
    )
}