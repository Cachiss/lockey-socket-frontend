
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import LockeyTeam  from '../assets/lockey_team/lockey-team.jpeg';
const images = [
    {
        src: LockeyTeam,
        legend: "Lockey Team"
    },
    {
        src:"https://dostoevsky-bts.com/blog/wp-content/uploads/2018/07/%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%BA%D0%B8-3.jpg",
        legend: "Marcos"
    },
    {
        src: "https://www.eluniversal.com.mx/resizer/XUyspwHdHL5MIMNJIj4BBNajDA8=/1100x666/cloudfront-us-east-1.images.arcpublishing.com/eluniversal/JH4QTNOFJBFNZIZJEX6TSA7FN4.jpg",
        legend: "Orlando"
    },
    {
        src: "https://1.bp.blogspot.com/-mKJV62xzT2s/XPlKZB3io7I/AAAAAAAAOO8/gMuVwEtWJ5EI_jDefv1uqa7cPivDoxOzQCLcBGAs/s1600/Ohys-Raws-Doukyonin-wa-Hiza-Tokidoki-Atama-no-Ue.-05-AT-X-1280x720-x264-AAC.00_18_56_10.Imagen-fija154.jpg",
        legend: "Margarita"
    },
    {
        src: "https://i.blogs.es/1443c8/luffy-en-one-piece/1366_2000.jpeg",
        legend: "Carlos"
    },
];
export default () => {
    return (
        <Carousel autoPlay infiniteLoop>
            {images.map((element, index) => {
                return (
                    <div>
                        <img src={element.src} />
                        <p className="legend" style={{"fontSize": "30px", "color":"yellow"}}>{element.legend}</p>
                    </div>
                );
            })}      
        </Carousel>
    );
};