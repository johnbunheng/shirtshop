import imageBanner from '../../public/img/Banner2.jpg'
const Banner = () => {
    return ( 
        <div>
            <div className='container mt-5'>
                <img src={imageBanner} alt="" 
                className='rounded-md sm:w-[1400px] xl:h-[400px] object-cover'/>
            </div>
        </div>
     );
}
 
export default Banner;