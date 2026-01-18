import bgImage from '../../src/assets/hero-bg.png'
import Button from '../ui/Button'
import heroImage from '../../src/assets/dergi.png'












export default function Hero() {

    return (
        <div
        className="hero position-relative"
        style={{
            backgroundImage: `url(${bgImage})`
        }}
        >

            {/* Content */}
            <div
            className='d-flex container p-0 m-0 mx-auto flex-row align-items-center h-100 text-white'
            >
                <div
                className='d-flex flex-column w-100 hero-content'
                >
                    <label
                    className='hero-header-1'
                    >
                        Profuture Teknoloji Dergisi
                    </label>
                    <label
                    className='hero-header-2'
                    >
                        Son Sayı Yayında
                    </label>
                    <p
                    className='my-4'
                    >
                        Protufure teknoloji mekanizmaları değişikliği alanlarında özgün akademik çalışmalar içeren yeni sayıya şimdi erişin.
                    </p>
                    <div
                    className='d-flex flex-row align-items-center gap-5'
                    >
                        <div
                        className='d-flex flex-row align-items-center gap-1'
                        >
                            <label>
                                Cilt: <b>2</b>
                            </label>
                        </div>
                        <div
                        className='d-flex flex-row align-items-center gap-1'
                        >
                            <label>
                                Sayı: <b>7</b>
                            </label>
                        </div>
                        <div
                        className='d-flex flex-row align-items-center gap-1'
                        >
                            <label>
                                <b>Haziran 2025</b>
                            </label>
                        </div>
                    </div>
                    <Button
                    variant='secondary'
                    className='me-auto my-5'
                    >
                        Dergiyi Görüntüle
                    </Button>
                </div>
                <div
                className='d-flex w-100'
                >

                </div>
            </div>

            {/* Image */}
            <div
            className='position-absolute hero-image'
            >
                <img
                src={heroImage}
                />
            </div>
        </div>
    )
}