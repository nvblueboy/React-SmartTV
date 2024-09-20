import './CarouselSlide.css';

export default function Weather({ children }) {
    return (
        <>
            <div className="carouselSlide">
                {children}
            </div>
        </>
    )
}