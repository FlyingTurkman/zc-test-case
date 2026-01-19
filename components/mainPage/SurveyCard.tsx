import Badge from '../ui/Badge'
import Button from '../ui/Button'
import PDFIcon from '../icons/PDFIcon'
import PageIcon from '../icons/PageIcon'
import AuthorIcon from '../icons/AuthorIcon'
import MailIcon from '../icons/MailIcon'
import DownloadIcon from '../icons/DownloadIcon'
import EyeIcon from '../icons/EyeIcon'








export default function SurveyCard() {

    return (
        <div
        className="d-flex flex-column gap-3 bg-white rounded-2 shadow-lg px-3 py-4 align-items-start border-1"
        >
            <div
            className="d-flex flex-row gap-2"
            >
                <Badge>
                    İklim
                </Badge>
                <Badge>
                    Araştırma Makalesi
                </Badge>
            </div>
            <div
            className='d-flex flex-column flex-lg-row align-items-center justify-content-between w-100'
            >
                <div
                className='d-flex flex-column gap-2 gap-lg-1'
                >
                    <div
                    className='d-flex flex-row align-items-center gap-2'
                    >
                        <PDFIcon size={18}/>
                        <label
                        className='fw-bold survey-title'
                        >
                            Türkiye&apos;nin Teknoloji Politikaları ve Döngüsel Ekonomi
                        </label>
                    </div>
                    <div
                    className='d-flex flex-column flex-lg-row align-items-lg-center align-items-start gap-2 '
                    >
                        <div
                        className='d-flex flex-row align-items-center gap-1'
                        >
                            <div
                            className='bg-muted rounded-circle'
                            >
                                <PageIcon size={20} className='mt-2 ms-2'/>
                            </div>
                            <label
                            className='survey-card-description'
                            >
                                Sayfa: <b>12-28</b>
                            </label>
                        </div>
                        <div
                        className='d-flex flex-row align-items-center gap-1'
                        >
                            <div
                            className='bg-muted rounded-circle'
                            >
                                <AuthorIcon size={16} className='m-1'/>
                            </div>
                            <label
                            className='survey-card-description'
                            >
                                Elif Başkaya Acar, Emre Taran, Halil Başar
                            </label>
                        </div>

                    </div>
                </div>
                <div
                className='d-flex flex-row gap-2 my-lg-0 my-2'
                >
                    <Button
                    variant='primary'
                    size='icon'
                    >
                        <MailIcon size={24} className='ms-2 mt-2'/>
                    </Button>
                    <Button
                    variant='primary'
                    size='icon'
                    >
                        <DownloadIcon size={24} className='ms-2 mt-2'/>
                    </Button>
                    <Button
                    variant='secondary'
                    >
                        <EyeIcon size={24}/>
                        Görüntüle
                    </Button>
                </div>
            </div>
        </div>
    )
}