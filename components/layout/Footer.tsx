














export default function Footer() {

    return (
        <footer>
            <div
            className="bg-primary-dark text-white"
            >
                <div
                className="d-flex flex-row container footer-top-content"
                >
                    <div
                    className="d-flex flex-row align-items-center gap-3 w-100"
                    >
                        <div>
                            I
                        </div>
                        <div
                        className="d-flex flex-column gap-1"
                        >
                            <label>
                                Dergi Editörü
                            </label>
                            <label>
                                <b>Prof. Dr. Elif Başkaya Acar</b>
                            </label>
                            <label>
                                elif@gmail.com
                            </label>
                        </div>
                    </div>
                    <div
                    className="d-flex flex-row align-items-center gap-3 w-100"
                    >
                        <div>
                            I
                        </div>
                        <div
                        className="d-flex flex-column gap-1"
                        >
                            <label>
                                Mail Adresi
                            </label>
                            <label>
                                profuture@gmail.com
                            </label>
                        </div>
                    </div>
                    <div
                    className="d-flex flex-row align-items-center gap-3 w-100"
                    >
                        <div>
                            I
                        </div>
                        <div
                        className="d-flex flex-column gap-1"
                        >
                            <label>
                                Profuture Teknoloji Yayınevi <br/>
                                Ahmet Kemal Mahallesi 1245. Cadde No: 10 Çankaya/Ankara
                            </label>
                        </div>
                    </div>
                </div>
                <div className="separator container my-5"></div>
                <p
                className="text-center container pb-3"
                >
                    Bu sitede yer alan tüm yazılı, görsel ve uygulama içerikleri kaynak gösterilmeden kullanılamaz. Site içerisinde sunulan bilgiler yalnızca bilgilendirme amacıyla hazırlanmış olup, bu bilgilerin kullanımından doğabilecek her türlü sorumluluk kullanıcıya aittir. Siteye erişim sağlayan kullanıcılar, bu şartları okumuş, anlamış ve kabul etmiş sayılır.
                </p>
            </div>
            <div
            className="bg-danger"
            >
                <div
                className="container d-flex align-items-center justify-content-center"
                >
                    <label
                    className="text-center text-white py-1"
                    >
                        {`Profuture Teknoloji - Tüm Hakları Saklıdır. © 2025`}
                    </label>
                </div>
            </div>
        </footer>
    )
}