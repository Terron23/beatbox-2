import React from "react";


class SelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true,
      text: "",
      arr: this.props.options,
      newOptions: "",
      newText: "",
      hideOption: false,
      classOp: "",
      otherText: [],
      modalId: ""
    };
  }

  handleReveal = e => {
    e.preventDefault();
    if (this.state.hide) {
      this.setState({ hide: false });
    } else {
      this.setState({ hide: true });
    }
  };

  addText = (id = "services") => {
    let check = document.getElementById(`${id}`);
    let arr = [];
    if (this.state.text.length > 1) {
      let x = this.state.text;
      x.split(", ").map(val => {
        arr.push(val);
      });
    }
    if (check.checked) {
      arr.push(check.value);
      this.setState({ text: arr.join(", ") });
    } else {
      this.setState({ text: arr.filter(x => x !== check.value).join(", ") });
    }
  };

  handleOther = (e, id) => {
    let otherText = this.state.otherText;

    otherText.push(
      <input
        type="text"
        id="other_id"
        className="col-md-4"
        defaultValue=""
        placeholder="Add Custom"
        width="70%"
      />
    );

    if (this.state.otherText.length > 1) {
      otherText = [];
    }
    this.setState({ otherText });
  };

  handleAdditions = (e, id = null) => {
    e.preventDefault();
    let value = document.getElementById(`${id}`).value;
    if (value.length > 0) {
      let arr = this.state.arr.concat(value);
      this.setState({ arr });
      document.getElementById(`${id}`).value = "";
    }
  };
  render() {
    let { hide, text, otherText } = this.state;
    let { custom, id, placeholder, label } = this.props;
    return (
      <div className="form-style-8">
        <label>{label}</label>
        <input
          className="form-control"
          autoComplete="off"
          type="text"
          name={id}
          value={text}
          onClick={this.handleReveal}
          id={id}
          placeholder={placeholder}
        />

        <ul style={{ listStyle: "none" }} className={hide ? "d-none" : ""}>
          {this.state.arr.map((op, i) => {
            let opLow = op.toLowerCase();
            return (
              <li key={i}>
                <input
                  type="checkbox"
                  name={opLow}
                  value={op}
                  onClick={() => this.addText(opLow)}
                  id={opLow}
                  width="50%"
                />{" "}
                {op}
              </li>
            );
          })}
          {custom ? (
            <li>
              <input
                type="checkbox"
                name="other"
                value="Other"
                id="other"
                onChange={this.handleOther}
              />{" "}
              Other
            </li>
          ) : (
            ""
          )}
          {Array.isArray(this.state.otherText)
            ? this.state.otherText.map((other, i) => {
                return (
                  <li key={i}>
                    <div className="row container">
                      {other}
                      <button
                        onClick={e => this.handleAdditions(e, "other_id")}
                        style={{ color: "#34CACA" }}
                        className="btn"
                      >
                        +Add
                      </button>
                    </div>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    );
  }
}

export default SelectBox;
