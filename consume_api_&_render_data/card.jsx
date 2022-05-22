"use strict";

const e = React.createElement;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="description">
          {this.props.description}
        </div>
        <div
          style={{
            height: 411,
            backgroundImage: `url(${this.props.img})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        ></div>
        <div className="image-infos">
          <div className="info-container">
            <div className="preposition">by</div>
            <div className="auth">{this.props.auth}</div>
          </div>
          <div className="info-container">
            <div className="preposition">on</div>
            <div className="date">{this.props.date}</div>
          </div>
        </div>
      </div>
    );
  }
}

document.querySelectorAll(".card").forEach((domContainer) => {
  const auth = domContainer.getAttribute('auth');
  const date = domContainer.getAttribute('date');
  const description = domContainer.getAttribute('description');
  const img = domContainer.getAttribute('img');
  const root = ReactDOM.createRoot(domContainer);
  root.render(e(Card, {
    auth: auth,
    date: date,
    description: description,
    img: img,

  }));
});
