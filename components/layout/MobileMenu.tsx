import Button, { buttonVariants } from '../ui/Button'
import MenuIcon from '../icons/MenuIcon'
import { useRef, useState } from 'react'
import { useClickOutside } from '../../hooks/useClickOutside'
import HomeIcon from '../icons/HomeIcon'
import PeopleIcon from '../icons/PeopleIcon'
import AuthorIcon from '../icons/AuthorIcon'













export default function MobileMenu() {

    const contentRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useClickOutside(contentRef, () => setIsOpen(false))  

    return (
        <div
        className="d-flex flex-column gap-3 text-primary"
        >
            <Button
            size='icon'
            variant='secondary'
            onClick={() => {
                setIsOpen((prev) => !prev)
            }}
            >
                <MenuIcon size={18}/>
            </Button>
            <div
            className={`sheet-container ${isOpen ? 'open' : ''}`}
            >
                <div
                ref={contentRef}
                className='sheet-content d-flex flex-column gap-3 p-3'
                >
                    <a
                    href='/'
                    className='text-primary'
                    >
                        <HomeIcon size={24} className='me-2'/> Ana Sayfa
                    </a>
                    <div className='separator'></div>
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
                    <div className='separator'></div>
                    <a
                    href='#'
                    className={buttonVariants({ variant: 'secondary' })}
                    >
                        <span>
                            <PeopleIcon size={24} className='me-2'/> Dergi Kurulu
                        </span>
                    </a>
                    <a
                    href='#'
                    className={buttonVariants({ variant: 'alternative' })}
                    >
                        <span>
                            <AuthorIcon size={24} className='me-2'/> Yazar Rehberi
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}