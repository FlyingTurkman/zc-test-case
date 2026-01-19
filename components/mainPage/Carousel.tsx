import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"
import Card from '../ui/Card'
import dergiPreview from '../../src/assets/dergi-preview.png'
import Badge from '../ui/Badge'
import Button from "../ui/Button"
import EyeIcon from '../icons/EyeIcon'
import DownloadIcon from '../icons/DownloadIcon'
import ArrowRightIcon from "../icons/ArrowRightIcon"
import CalendarIcon from '../icons/CalendarIcon'
import MonitorIcon from '../icons/MonitorIcon'
import PDFIcon from '../icons/PDFIcon'
import VolumeIcon from '../icons/VolumeIcon'
import ArrowLeftIcon from '../icons/ArrowLeftIcon'
import ToggleButton from "../ui/ToggleButton"




export default function Carousel() {

    const [ emblaRef, emblaApi ] = useEmblaCarousel()

    const [isPrevButtonDisabled, setIsPrevButtonDisabled] = useState<boolean>(false)
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState<boolean>(false)

    const onSelect = useCallback((api: typeof emblaApi) => {
        setIsPrevButtonDisabled(!api?.canScrollPrev())
        setIsNextButtonDisabled(!api?.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onSelect])
    
    return (
        <div
        className="container carousel-content"
        >
            <div
            className="d-flex flex-row align-align-items-end justify-content-lg-start justify-content-between gap-5"
            >
                <div
                className="d-flex flex-column gap-1"
                >
                    <label
                    className="fs-5 text-muted"
                    >
                        Sayılar
                    </label>
                    <label
                    className="text-primary fw-bold fs-4"
                    >
                        Dergiler
                    </label>
                </div>
                <div
                className="d-flex flex-row align-items-center gap-2"
                >
                    <ToggleButton 
                    className="justify-content-center embla__button embla__button--prev"
                    disabled={isPrevButtonDisabled}
                    onClick={() => {
                        emblaApi?.scrollPrev()
                    }}
                    >
                        <ArrowLeftIcon size={16}/>
                    </ToggleButton>
                    <ToggleButton 
                    className="justify-content-center embla__button embla__button--next"
                    disabled={isNextButtonDisabled}
                    onClick={() => {
                        emblaApi?.scrollNext()
                    }}
                    >
                        <ArrowRightIcon size={16}/>
                    </ToggleButton>
                </div>
            </div>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {Array.from({ length: 7 }, (_, i) => i).map((i) => {

                        return (
                            <div 
                            className="embla__slide"
                            key={i}
                            >
                                <Card>
                                    <Card.Image>
                                        <img
                                        src={dergiPreview}
                                        className="object-fit-contain w-100"
                                        />
                                    </Card.Image>
                                    <Card.Content
                                    className="d-flex flex-column gap-2"
                                    >
                                        <div
                                        className="d-flex flex-row align-items-start justify-content-between w-100"
                                        >
                                            <div>
                                                <PDFIcon size={20}/>
                                            </div>
                                            <Badge
                                            variant="teal"
                                            >
                                                Yeni
                                            </Badge>
                                        </div>
                                        <Badge
                                        className="me-auto"
                                        variant="outline"
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
                                                    <VolumeIcon size={18}/> Cilt: <b>1</b>
                                                </label>
                                            </div>
                                            <div
                                            className="d-flex"
                                            >
                                                <label>
                                                    
                                                    <MonitorIcon size={18}/> Sayı: <b>1</b>
                                                </label>
                                            </div>
                                            <div
                                            className="d-flex"
                                            >
                                                <label>
                                                    <CalendarIcon size={18}/> <b>Aralık 2022</b>
                                                </label>
                                            </div>
                                        </div>
                                        <div
                                        className="d-flex flex-row align-items-center justify-content-between gap-1 ms-auto"
                                        >
                                            <Button
                                            variant="secondary"
                                            size="icon"
                                            >
                                                <EyeIcon size={24}/>
                                            </Button>
                                            <Button
                                            size="icon"
                                            >
                                                <DownloadIcon size={24} className="ms-2 mt-2"/>
                                            </Button>
                                            <Button
                                            size="icon"
                                            >
                                                <ArrowRightIcon size={16}/>
                                            </Button>
                                        </div>
                                    </Card.Content>
                                </Card>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}