import React from 'react';
// import { Carousel } from 'react-bootstrap';
import Slider from "react-slick";

const Home = () => {
  const [count, setCount ] = React.useState(0);
  
  const clickHandler = () => {
    setCount(count + 1);
    
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div>
      <h1>this is Home {count}</h1>
      <button onClick={() => clickHandler()} className='m-1'>Increment</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)} className='m-1'>Decrement</button>
            <h2>Auto Play</h2>
            <div className='bg-dark text-light'>
        <Slider className='container bg-danger'{...settings}>
          <div className='bg-dark'>
            <img className='mx-auto' src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-1/305441680_574185531120722_6960495309660664748_n.jpg?stp=c3.0.240.240a_dst-jpg_p240x240&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFO_Sctmch1u5avSjoP8odj9qDuMo6RCqj2oO4yjpEKqBppOK4cKn83qXDeRhRel3dcgH8AKtH80JxW582ETxTg&_nc_ohc=OWl4C3BR3LgAX-lOmv9&_nc_ht=scontent.fjsr11-1.fna&oh=00_AT-E5ava2rX4hpoY3hUzKPAtxDYZYYFUwziYyNtHhW8TCw&oe=6324A22C" alt=""/>
          </div>
          <div className='bg-info'>
            <img className='mx-auto' width="240px"height="240px" src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/279568401_1061054357953607_576310872047348214_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFI8EayTU4afDhg5TCXLApxV36apkbqPXVXfpqmRuo9dY3lsd2esnZ6Hbeo-kaTHoi6oDT-_KaxhAo-Xu59G9KM&_nc_ohc=V8ZrcIKbCfEAX9MXgk0&_nc_ht=scontent.fjsr11-1.fna&oh=00_AT8fP_FvkdMVZGbTiVxlzfWqA2CCfFckf08NgL_7iJFz5A&oe=63246EAD" alt=""/>
          </div>
          <div className='bg-warning'>
            <img className='mx-auto'width="240px"  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t1.6435-9/142301614_723455338359776_3924569373668867191_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF7croeeWyvf9W6Ut8C-YpLWEU975cJAjZYRT3vlwkCNkKi_oh23raNvUjUxySUDfttQca5kxuEs4c0MHmDuVDy&_nc_ohc=vQmEDBFgHwEAX-kALFy&_nc_ht=scontent.fjsr11-1.fna&oh=00_AT-sQFn390_IvXgmdBFfsPtwSnq69TnIxE4R2abahk_lJA&oe=6343E038" alt=""/>
          </div>
          <div className='bg-success'>
            <img className='mx-auto'width="240px"  src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t1.6435-9/191972544_823270934979787_2687224351067753115_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHj22x8c4YPyhOLC8GzOP6vioepB-LOzDaKh6kH4s7MNsXw_PLIvyEqDZsWZ8-jpuSafSYJp4WNCSSVh9TLxNKU&_nc_ohc=-Ydyp-imPYgAX_HeoiZ&tn=9gIs8MNmdHjWCSOH&_nc_ht=scontent.fjsr11-1.fna&oh=00_AT8fes-iFxCXcaofcJ7o5lCr17M5mMwEsQ6ij0KrVhIypg&oe=6343CA69" alt=""/>
          </div>
          <div className='bg-secondary'>
            <img className='mx-auto'width="240px" height="240px" src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/248064330_569241497515794_7134749374147108263_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHb9FFYKZta0-HkVwvTBkXguJuTiKVVpWK4m5OIpVWlYsMjLgZm06Pswj6zbmONML8ghyht-U6H-tU6kW_ZL325&_nc_ohc=zBpWJ3xaUGQAX-QIonn&tn=9gIs8MNmdHjWCSOH&_nc_ht=scontent.fjsr11-1.fna&oh=00_AT-DWrinFtmsGQoptNAcg8_zGyu_988I1UojB1EiYJwIIg&oe=63236A8A" alt=""/>
          </div>
        </Slider>
        </div>
    </div>
  );
}

export default Home;
