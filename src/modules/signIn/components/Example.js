import React from "react";
import "./example.scss";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
      color: "red",
      text: "123",
      obj: {
        color: "red",
        text: "456"
      },
      details: [
        {
          imageSource: "111",
          describe: "111"
        },
        {
          imageSource: "222",
          describe: "222"
        },
        {
          imageSource: "333",
          describe: "333"
        },
        {
          imageSource: "444",
          describe: "444"
        }
      ]
    };
  }
  componentDidMount() {
    // fetchData(response => {
    //   this.setState({ text: response.text }); //456
    // });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.text !== this.props.text && this.props.text.length > 0) {
      console.log("text change");
    }
  }
  componentWillUnmount() {}

  render() {
    console.log(this.props);
    return (
      <div className='example'>
        {this.state.isShow && <div className={this.state.color}>test</div>}

        <div
          onClick={() =>
            this.setState({
              color: this.state.color === "red" ? "blue" : "red"
            })
          }>
          BUTTON
        </div>
        <div
          onClick={() =>
            this.setState({
              isShow: !this.state.isShow
            })
          }>
          BUTTON2
        </div>
        <div
          onClick={() =>
            this.setState({
              ...this.state,
              obj: {
                ...this.state.obj,
                color: "blue"
              }
            })
          }>
          TEST {this.props.name}
        </div>
        {/* {this.state.details.map(detail => (
          <>
            <div>{detail.imageSource}</div>
            <div>{detail.describe}</div>
          </>
        ))} */}
        <div onClick={() => this.props.switchName({ name: "yeah" })}>
          switchName
        </div>
      </div>
    );
  }
}

export default Example;
