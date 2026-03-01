import "./About.css";
import '../../App.css';

import img1 from "../../assets/gallery/image1.webp";
import img2 from "../../assets/gallery/image2.webp";
import img3 from "../../assets/gallery/image3.webp";
import img4 from "../../assets/gallery/image4.webp";
import img5 from "../../assets/gallery/image5.webp";
import img6 from "../../assets/gallery/image6.webp";
import img7 from "../../assets/gallery/image7.webp";
import img8 from "../../assets/gallery/image8.webp";
import img9 from "../../assets/gallery/image9.webp";
import img10 from "../../assets/gallery/image10.webp";
import img11 from "../../assets/gallery/image11.webp";
import img12 from "../../assets/gallery/image12.webp";
import img13 from "../../assets/gallery/image13.webp";
import img14 from "../../assets/gallery/image14.webp";
import img15 from "../../assets/gallery/image15.webp";
import img16 from "../../assets/gallery/image16.webp";
import img17 from "../../assets/gallery/image17.webp";
import img18 from "../../assets/gallery/image18.webp";
import img19 from "../../assets/gallery/image19.webp";
import img20 from "../../assets/gallery/image20.webp";
import img21 from "../../assets/gallery/image21.webp";
import img22 from "../../assets/gallery/image22.webp";
import img23 from "../../assets/gallery/image23.webp";
import img24 from "../../assets/gallery/image24.webp";
import img25 from "../../assets/gallery/image25.webp";





function About() {
  const images = [img1, img2, img3, img4, img5, img6, img13, img14, img15, img16, img17,img18];
  const images2 = [img7, img8, img9, img10, img11, img12, img19, img20, img21, img22, img23, img24, img25];


  return (
    <section className="about">
        <div className="container">
      <div className="about-container">

        {/* LEFT SIDE TEXT */}
        <div className="about-text">
          <h2>About me</h2>
          <p>
            I’m a web developer and graphics designer who enjoys turning ideas into clean, functional, and visually appealing digital experiences.
          </p>
          <p>
            I’m naturally curious and love solving complex problems, writing efficient code, and designing visuals that communicate clearly.
          </p>
          <p>
            When I’m not coding or designing, I’m usually exploring new tools, learning new skills, or working on creative side projects.
          </p>
        </div>

        {/* RIGHT SIDE AUTO SCROLL IMAGES */}
        <div className="image-columns-container">
        <div className="image-column">
          <div className="image-track">
            {[...images, ...images].map((img, index) => (
              <div className="image-card" key={index}>
                <img src={img} alt="gallery" />
              </div>
            ))}
          </div>
        </div>
        <div className="image-column">
          <div className="image-track2">
            {[...images2, ...images2].map((img, index) => (
              <div className="image-card" key={index}>
                <img src={img} alt="gallery" />
              </div>
            ))}
          </div>
        </div>
        </div>
            
      </div>
      </div>
    </section>
  );
}

export default About;