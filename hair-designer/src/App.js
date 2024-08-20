import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Hair Dresser Website</title>
  
  {/* header */}
  <section className="header">
    <a href="#" className="logo"> Hair dresser </a>
    <nav className="navbar">
      <div id="close-navbar" className="fas fa-times" />
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#styles">Styles</a>
      <a href="#pricing">Pricing</a>
      <a href="#blog">Blogs</a>
      <a href="#visit">Book A Visit</a>
      <a href="#review">Review</a>
      <a href="#footer">Contact Us</a>
    </nav>
    <div id="menu-btn" className="fas fa-bars" />
  </section>
  {/* header */}
  {/* home */}
  <section className="home" id="home">
    <div className="content">
      <span>Welcome</span>
      <h3>We make <br /> hair beautiful <br /> &amp; unique</h3>
    </div>
  </section>
  {/* home */}
  {/* about us */}
  <section className="about" id="about">
    <h1 className="heading">about us</h1>
    <div className="row">
      <div className="image">
        <img src="images/about.jpg" alt />
      </div>
      <div className="content">
        <h3 className="title">We are a group of stylists</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor eget purus. Phasellus scelerisque sapien sit amet mauris laoreet, eget scelerisque nunc cursus. Duis ultricies malesuada leo vel aliquet. Curabitur rutrum porta dui eget mollis. Nullam lacinia dictum auctor.</p>        
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Orci varius natoque penatibus et magnis dis parturient montes.</p>
        <div className="icons-container">
          <div className="icons">
            <img src="images/about-icon-1.png" alt />
            <h3>Professional tools</h3>
          </div>
          <div className="icons">
            <img src="images/about-icon-2.png" alt />
            <h3>quality products</h3>
          </div>
          <div className="icons">
            <img src="images/about-icon-3.png" alt />
            <h3>hair washing</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* about us end */}
  {/* services */}
  <section className="services" id="services">
    <h1 className="heading">premium services</h1>
    <div className="box-container">
      <div className="box">
        <img src="images/services-1.jpg" alt />
        <div className="content">
          <h3>Hair styling</h3>
        </div>
      </div>
      <div className="box">
        <img src="images/services-2.jpg" alt />
        <div className="content">
          <h3>wedding service </h3>
        </div>
      </div>
      <div className="box">
        <img src="images/services-3.jpg" alt />
        <div className="content">
          <h3>manly haircut</h3>
        </div>
      </div>
      <div className="box">
        <img src="images/services-4.jpg" alt />
        <div className="content">
          <h3>beard trimming</h3>
        </div>
      </div>
    </div>
  </section>
  {/* services end */}
  {/* styles */}
  <section className="styles" id="styles">
    <h1 className="heading">choose your styles</h1>
    <div className="box-container">
      <div className="box">
        <div className="image">
          <img src="images/style-1.jpg" alt />
        </div>
        <div className="content">
          <h3 className="title">Wedding hairstyle</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/style-2.jpg" alt />
        </div>
        <div className="content">
          <h3 className="title">evening hairstyle</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/style-3.jpg" alt />
        </div>
        <div className="content">
          <h3 className="title">party hairstyle</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/style-4.jpg" alt />
        </div>
        <div className="content">
          <h3 className="title">Business hairstyle</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </section>
  {/* styles end*/}
  {/* pricing */}
  <section className="pricing" id="pricing">
    <h1 className="heading">offer and Pricing</h1>
    <div className="box-container">
      <div className="box">
        <h3 className="title">basic</h3>
        <div className="price">
          <span className="currency">$</span>
          <span className="amount">10</span>
        </div>
        <ul>
          <li> <i className="fas fa-check" /> Simple Haircut </li>
          <li> <i className="fas fa-check" /> Hair Plugs </li>
          <li> <i className="fas fa-check" /> Styling</li>
          <li> <i className="fas fa-check" /> Braiding</li>
        </ul>
        <a href="#visit"><button>book a visit</button></a>
      </div>
      <div className="box">
        <h3 className="title">standard</h3>
        <div className="price">
          <span className="currency">$</span>
          <span className="amount">20</span>
        </div>
        <ul>
          <li> <i className="fas fa-check" /> Styling</li>
          <li> <i className="fas fa-check" /> Simple Haircut </li>
          <li> <i className="fas fa-check" /> Color Correction</li>
          <li> <i className="fas fa-check" /> Perms</li>
        </ul>
        <a href="#visit"><button>book a visit</button></a>
      </div>
      <div className="box">
        <h3 className="title">premium</h3>
        <div className="price">
          <span className="currency">$</span>
          <span className="amount">30</span>
        </div>
        <ul>
          <li> <i className="fas fa-check" />Perms </li>
          <li> <i className="fas fa-check" />Extensions </li>
          <li> <i className="fas fa-check" />Styling </li>
          <li> <i className="fas fa-check" />Braiding</li>
        </ul>
        <a href="#visit"><button>book a visit</button></a>
      </div>
    </div>
  </section>
  {/* pricing end */}
  {/* blog */}
  <section className="blogs" id="blog">
    <h1 className="heading"> our blogs </h1>
    <div className="box-container">
      <div className="box">
        <div className="image">
          <img src="images/blog1.jpg" alt />
        </div>
        <div className="content">
          <a href="#" className="title">Styling hair service</a>
          <span>by admin / 19th july, 2021</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aut eligendi, doloremque nihil sapiente fugit aliquam? Error nisi velit, a atque fugit laborum.</p>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/blog2.jpg" alt />
        </div>
        <div className="content">
          <a href="#" className="title">Styling hair service</a>
          <span>by admin / 19th july, 2021</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aut eligendi, doloremque nihil sapiente fugit aliquam? Error nisi velit, a atque fugit laborum.</p>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src="images/blog3.jpg" alt />
        </div>
        <div className="content">
          <a href="#" className="title">Styling hair service</a>
          <span>by admin / 19th july, 2021</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic aut eligendi, doloremque nihil sapiente fugit aliquam? Error nisi velit, a atque fugit laborum.</p>
        </div>
      </div>
    </div>
  </section>
  {/* blog end*/}
  {/* visit */}
  <section className="visit" id="visit">
    <h1 className="heading"> book a visit </h1>
    <div className="row">
      <form action>
        <h3>book your first visit today</h3>
        <div className="inputBox">
          <input type="text" placeholder="Your name" />
        </div>
        <div className="inputBox">
          <input type="email" placeholder="Your e-mail" />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Subject" />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Message" />
        </div>
        <input type="submit" defaultValue="Send A Message" className="btn" />
      </form>
      <div className="image">
        <img src="images/contact.png" alt />
      </div>
    </div>
  </section>
  {/* visit end*/}
  {/* reviews */}
  <section className="review" id="review">
    <h1 className="heading">Customer's Review</h1>
    <div className="box-container">
      <div className="box">
        <img src="images/quote-img.png" alt className="quote" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src="images/review-1.png" className="user" alt />
        <h3>derek rude</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
      </div>
      <div className="box">
        <img src="images/quote-img.png" alt className="quote" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src="images/review-2.png" className="user" alt />
        <h3>jenny white</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
      </div>
      <div className="box">
        <img src="images/quote-img.png" alt className="quote" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nulla sit libero nemo fuga sequi nobis? Necessitatibus aut laborum, nisi quas eaque laudantium consequuntur iste ex aliquam minus vel? Nemo.</p>
        <img src="images/review-3.png" className="user" alt />
        <h3>kate mudton</h3>
        <div className="stars">
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star" />
          <i className="fas fa-star-half-alt" />
        </div>
      </div>
    </div>
  </section>
  {/* reviews end */}
  {/* footer */}
  <section className="footer" id="footer">
    <div className="box-container">
      <div className="box">
        <h3> Find us here </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, voluptatem.</p>
        <div className="share">
          <a href="https://www.facebook.com/" className="fab fa-facebook-f" />
          <a href="https://twitter.com/" className="fab fa-twitter" />
          <a href="https://www.instagram.com/" className="fab fa-instagram" />
          <a href="https://in.linkedin.com/" className="fab fa-linkedin" />
        </div>
      </div>
      <div className="box">
        <h3>Contact Us</h3>
        <p>+91 97175XXXX</p>
        <a href="#" className="link">HairMafia@gmail.com</a>
      </div>
      <div className="box">
        <h3>  Localization</h3>
        <p>230 Point of the Pines Dr <br />
          Uttam Nagar <br />
          India</p>
      </div>
    </div>
  </section>
  {/* footer end*/}
</div>

    
  );
}

export default App;
