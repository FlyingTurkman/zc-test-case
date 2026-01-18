import Button from '../ui/Button'
import SurveyCard from './SurveyCard'
import recentMagazine from '../../src/assets/son-sayi.png'
import DownloadIcon from '../icons/DownloadIcon'
import ArrowRightIcon from '../icons/ArrowRightIcon'











export default function LatestSurveys() {


    return (
        <div
        className="container p-0 mt-5 d-flex flex-row gap-3 survey-content"
        >
            <div
            className="d-flex flex-column gap-3 shadow-lg p-2 bg-white rounded-4 position-relative"
            >
                <div
                className='latest-magazine-content'
                >
                    Son Sayı
                </div>
                <img
                src={recentMagazine}
                />
                <div
                className='d-flex flex-row align-items-center justify-content-center gap-3'
                >
                    <Button
                    size='icon'
                    >
                        <DownloadIcon size={24} className='ms-2 mt-2'/>
                    </Button>
                    <Button
                    variant='secondary'
                    >
                        Görüntüle <ArrowRightIcon/>
                    </Button>
                </div>
            </div>
            <div
            className='d-flex flex-column gap-2 w-100 pt-4'
            >
                <div
                className='d-flex flex-row align-items-start justify-content-between'
                >
                    <div
                    className='d-flex flex-column gap-2'
                    >
                        <label
                        className='text-muted fs-5'
                        >
                            Profuture Teknoloji Dergisi
                        </label>
                        <label
                        className='text-danger fw-bold fs-3'
                        >
                            Güncel Yazılar
                        </label>
                    </div>
                    <Button>
                        Tümünü Görüntüle <ArrowRightIcon/>
                    </Button>
                </div>
                <SurveyCard/>
                <SurveyCard/>
                <SurveyCard/>
                <SurveyCard/>
            </div>
        </div>
    )
}