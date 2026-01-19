import MessageIcon from '../icons/MessageIcon'















export default function MobileInformationBar() {

    return (
        <div
        className="nav-top-mobile d-flex flex-column d-lg-none align-items-center p-1 gap-2"
        >
            <a
            href='mailto:profuture@gmail.com'
            className='text-white d-flex flex-row gap-2 align-items-center'
            aria-label='Mail gönder'
            >
                <MessageIcon
                size={18}
                />
                <label>
                    profuture@gmail.com
                </label>
            </a>
            <div
            className='d-flex flex-row flex-wrap align-items-center justify-content-center gap-2'
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
    )
}