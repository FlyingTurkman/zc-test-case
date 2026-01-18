import logo from '../../src/assets/logo.png'
import { buttonVariants } from '../ui/Button'













export default function Header() {

    return (
        <header
        className="sticky-top d-flex flex-row bg-white"
        >
            <div
            className="d-flex bg-primary h-full logo"
            >
                <img
                src={logo}
                />
            </div>
            <div
            className='d-flex flex-column w-100 !h-100'
            >
                <div
                className="d-flex flex-row align-items-center justify-content-between nav-top w-100"
                >
                    <a
                    href='mailto:profuture@gmail.com'
                    className='text-white'
                    >
                        <label>
                            profuture@gmail.com
                        </label>
                    </a>
                    <label>
                        asdasdasd
                    </label>
                </div>
                <div
                className='d-flex flex-row align-items-center justify-content-between navbar h-100'
                >
                    <a
                    href='/'
                    >
                        <label>H</label>
                    </a>
                    <div
                    className='d-flex flex-row align-items-center gap-3'
                    >
                        <a
                        href='#'
                        >
                            Amaç ve Kapsam
                        </a>
                        <a
                        href='#'
                        >
                            Etik İlkeler ve Yayın Politikası
                        </a>
                        <a
                        href='#'
                        >
                            Makale Çağrıları
                        </a>
                        <a
                        href='#'
                        >
                            Sayılar
                        </a>
                        <a
                        href='#'
                        >
                            İletişim
                        </a>
                        <a
                        href='#'
                        className={buttonVariants({ variant: 'secondary' })}
                        >
                            Dergi Kurulu
                        </a>
                        <a
                        href='#'
                        className={buttonVariants({ variant: 'alternative' })}
                        >
                            Yazar Rehberi
                        </a>
                        <a
                        href='#'
                        className={buttonVariants({ variant: 'primary', size: 'icon' })}
                        >
                            S
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}