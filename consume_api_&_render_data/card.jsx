"use strict";

const e = React.createElement;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" };
  }
  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }
  getImgClass() {
    return this.state.imageStatus === "loaded" ? "image" : "hide";
  }
  render() {
    return (
      <div className="container">
        <div className="description">{this.props.description}</div>
        <div className="image-container">
          <img
            src={this.props.img}
            alt=""
            className={this.state.imageStatus === "loaded" ? "image" : "hide"}
            onLoad={this.handleImageLoaded.bind(this)}
          />
          <div className="gradient-background"></div>
        </div>
        <div
          className={this.state.imageStatus === "loaded" ? "hide" : "skeleton"}
        ></div>
        <div className="image-infos">
          <div className="info-container">
            <div className="preposition">by</div>
            <a rel="stylesheet" href={this.props.userLink} className="auth">
              {this.props.auth}
            </a>
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
  const auth = domContainer.getAttribute("auth");
  const date = domContainer.getAttribute("date");
  const description = domContainer.getAttribute("description");
  const img = domContainer.getAttribute("img");
  const userLink = domContainer.getAttribute("user-link");
  const root = ReactDOM.createRoot(domContainer);
  root.render(
    e(Card, {
      auth: auth,
      date: date,
      description: description,
      img: img,
      userLink: userLink,
    })
  );
});
