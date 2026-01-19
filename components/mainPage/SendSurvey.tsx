import surveyBg from '../../src/assets/survey-bg.webp'
import surveyLeft from '../../src/assets/survey-left.webp'
import surveyRight from '../../src/assets/survey-right.webp'
import Button from '../ui/Button'
import H2 from '../ui/H2'
import promotion from '../../src/assets/promotion.png'
import ArrowRightIcon from '../icons/ArrowRightIcon'









export default function SendSurvey() {

    return (
        <div
        className="send-survey container p-0 d-flex flex-column flex-lg-row position-relative rounded-5"
        style={{
            backgroundImage: `url(${surveyBg})`
        }}
        >
            <img
            src={surveyLeft}
            className='d-flex w-100 align-items-center justify-content-center  survey-left-image'
            alt='Dergi'
            />
            <div
            className='d-flex flex-column gap-2 w-100 align-items-center justify-content-center z-3 survey-content'
            >
                <img
                src={promotion}
                className='promotion-icon mt-4'
                alt='Duyuru'
                />
                <H2
                className='text-center'
                >
                    Türkiye Ulusal Dijital Veri ve Altyapıları
                </H2>
                <p
                className='text-center my-3'
                >
                    Bu dosya kapsamında; ulusal ölçekte dijital veri yönetimi, kamu ve özel sektörde teknoloji altyapıları, yapay zekâ uygulamaları, büyük veri analitiği, siber güvenlik, akıllı sistemler ve dijital dönüşüm odaklı özgün, güncel ve disiplinlerarası akademik çalışmalar değerlendirilecektir.
                </p>
                <Button
                variant='danger'
                aria-label='Makale gönder'
                >
                    Makale Gönder <ArrowRightIcon/>
                </Button>
            </div>
            <div
            className='d-flex w-100 align-items-center justify-content-center'
            >
                <div
                className='survey-image'
                >
                    <img
                    src={surveyRight}
                    alt='Dergi'
                    />
                </div>
            </div>
        </div>
    )
}