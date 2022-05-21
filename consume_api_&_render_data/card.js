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
