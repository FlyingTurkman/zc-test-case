import logo from '../../src/assets/logo.png'
import { buttonVariants } from '../ui/Button'
import MessageIcon from '../icons/MessageIcon'
import PeopleIcon from '../icons/PeopleIcon'
import AuthorIcon from '../icons/AuthorIcon'
import SearchIcon from '../icons/SearchIcon'
import HomeIcon from '../icons/HomeIcon'
import Button from '../ui/Button'
import MobileMenu from '../layout/MobileMenu'







export default function Header() {

    return (
        <>
            {/* Desktop header */}
            <header
            className="sticky-top d-lg-flex d-none flex-row bg-white"
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
                        className='text-white d-flex flex-row gap-2 align-items-center'
                        >
                            <MessageIcon
                            size={18}
                            />
                            <label>
                                profuture@gmail.com
                            </label>
                        </a>
                        <div
                        className='d-flex flex-row align-items-center gap-2'
                        >
                            <label>
                                ISSN: <b>345-255</b>
                            </label>
                            <label>
                                Başlangıç: <b>2025</b>
                            </label>
                            <label>
                                Periyot: <b>Yılda 2 Sayı</b>
                            </label>
                        </div>
                    </div>
                    <div
                    className='d-flex flex-row align-items-center justify-content-between navbar h-100'
                    >
                        <a
                        href='/'
                        >
                            <HomeIcon size={24} color='#A8B95E'/>
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
                                <PeopleIcon size={24}/>
                                Dergi Kurulu
                            </a>
                            <a
                            href='#'
                            className={buttonVariants({ variant: 'alternative' })}
                            >
                                <AuthorIcon size={24}/>
                                Yazar Rehberi
                            </a>
                            <a
                            href='#'
                            className={buttonVariants({ variant: 'primary', size: 'icon' })}
                            >
                                <SearchIcon size={24} className='d-flex ms-1 mt-1'/>
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile header */}
            <header
            className='mobile-menu d-flex py-2 flex-row d-lg-none bg-primary align-items-center justify-content-between text-white container sticky-top'
            >
                <MobileMenu/>
                <a
                href='/'
                >
                    <img
                    src={logo}
                    className='mobile-logo'
                    />
                </a>
                <Button
                size='icon'
                variant='primary'
                className='mobile-icon'
                >
                    <SearchIcon size={24} className='mt-1 ms-1'/>
                </Button>
            </header>
        </>
    )
}