import Badge from '../ui/Badge'
import Button from '../ui/Button'











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
            className='d-flex flex-row align-items-center justify-content-between w-100'
            >
                <div
                className='d-flex flex-column gap-1'
                >
                    <div
                    className='d-flex flex-row align-items-center gap-2'
                    >
                        <div>
                            PDF
                        </div>
                        <label
                        className='fw-bold survey-title'
                        >
                            Türkiye&apos;nin Teknoloji Politikaları ve Döngüsel Ekonomi
                        </label>
                    </div>
                    <div
                    className='d-flex flex-row align-items-center gap-2 '
                    >
                        <div
                        className='d-flex flex-row align-items-center gap-1'
                        >
                            <div>
                                D
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
                            <div>
                                D
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
                className='d-flex flex-row gap-2'
                >
                    <Button
                    variant='primary'
                    size='icon'
                    >
                        P
                    </Button>
                    <Button
                    variant='primary'
                    size='icon'
                    >
                        D
                    </Button>
                    <Button
                    variant='secondary'
                    >
                        Görüntüle
                    </Button>
                </div>
            </div>
        </div>
    )
}