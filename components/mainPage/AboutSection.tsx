import H2 from '../../components/ui/H2'
import { buttonVariants } from '../ui/Button'
import ArrowRightIcon from '../icons/ArrowRightIcon'
















export default function AboutSection() {

    return (
        <div
        className="container about-section"
        >
            <div
            className="d-flex flex-column gap-2 w-lg-50"
            >
                <label
                className="about-description"
                >
                    Dergi Amacı ve Kapsamı
                </label>
                <H2>
                    Profuture Teknoloji Dergisi
                </H2>
                <p
                className='about-p'
                >
                    Profuture Teknoloji Dergisi, 2022 yılında yayın hayatına başlayan; teknoloji, inovasyon, dijital dönüşüm ve geleceğin üretim modelleri ekseninde sosyal bilimler ile mühendislik ve fen bilimlerini bir araya getiren, uluslararası hakemli ve açık erişimli bir akademik yayındır.
                </p>
                <a
                href='#'
                className={buttonVariants({ variant: 'primary', className: 'me-auto' })}
                aria-label='Detay'
                >
                    Detay <ArrowRightIcon className='ms-4'/>
                </a>
            </div>
        </div>
    )
}