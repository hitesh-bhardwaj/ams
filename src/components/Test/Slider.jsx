import { useEffect, useRef } from 'react';


const Slider = () => {
  const sliderRef = useRef();

  useEffect(()=>{
    const activate = (e) => {
        const items = sliderRef.current.querySelectorAll('.item'); 
        if (e.target.closest('.next')) {
          sliderRef.current.append(items[0]);
        } else if (e.target.closest('.prev')) {
          sliderRef.current.prepend(items[items.length - 1]);
        }
      };
      const nextButton = document.querySelector('.btn.next');
      const prevButton = document.querySelector('.btn.prev');
    
      nextButton.addEventListener('click', activate);
      prevButton.addEventListener('click', activate);
  
      return () => {
        nextButton.removeEventListener('click', activate);
        prevButton.removeEventListener('click', activate);
      };

  },[])
  

  return (
    <main className="main">
      <div className="slider" ref={sliderRef}>
        {/* First Item */}
        <div className="item">
          <img src="https://unsplash.it/1920/1080?random=1" loading="eager" alt="" />
          <div className="content">
            <h2 className="title">Lossless Youths</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis
              inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </div>

        {/* Second Item */}
        <div className="item">
          <img src="https://unsplash.it/1920/1080?random=2" loading="eager" alt="Nobis Omnis" className="image" />
          <div className="content">
            <h2 className="title">Estrange Bond</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis
              inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </div>

        {/* Third Item */}
        <div className="item">
          <img src="https://unsplash.it/1920/1080?random=3" loading="eager" alt="Ut Distinctio" className="image" />
          <div className="content">
            <h2 className="title">The Gate Keeper</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis
              inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </div>

        {/* Fourth Item */}
        <div className="item">
          <img src="https://unsplash.it/1920/1080?random=5" loading="eager" alt="Ipsam Tenetur" className="image" />
          <div className="content">
            <h2 className="title">Urban Decay</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis
              inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </div>

        {/* Fifth Item */}
        <div className="item">
          <img src="https://unsplash.it/1920/1080?random=6" loading="eager" alt="Nesciunt Consectetur Similique Sit" className="image" />
          <div className="content">
            <h2 className="title">The Migration</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis
              inventore praesentium nisi. Id laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div> 

      <nav className="nav">
        {/* <IonIcon className="btn prev" icon={arrowBackOutline} /> */}
        {/* <IonIcon className="btn next" icon={arrowForwardOutline} /> */}
        <button className="btn prev">Prev</button>
        <button className="btn next">Next</button>
      </nav>
    </main>
  );
};

export default Slider;
