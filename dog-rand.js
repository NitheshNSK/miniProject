import React from "react";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "random",
      img: ""
    };
  }
  async componentDidMount() {
    let data = await axios.get("https://dog.ceo/api/breeds/image/random");
    //console.log(data.data.message);
    this.setState({ value: "random", img: data.data.message });
  }

  toUpdat = async (e) => {
    //console.log(e)
    let data;
    try {
      if (e == "random") {
        data = await axios.get("https://dog.ceo/api/breeds/image/random");
      } else {
        data = await axios.get(`https://dog.ceo/api/breed/${e}/images/random`);
      }
      this.setState({
        value: e,
        img: data.data.message
      });
    } catch (err) {
      if (e.type == "click") {
        if (this.state.value == "random") {
          data = await axios.get("https://dog.ceo/api/breeds/image/random");
        } else {
          data = await axios.get(
            `https://dog.ceo/api/breed/${this.state.value}/images/random`
          );
        }

        this.setState({
          img: data.data.message
        });
      }
    }
  };

  // if(v=='random'){
  //   let data=await axios.get('https://dog.ceo/api/breeds/image/random');
  //   //console.log(data.data.message);
  //   this.setState(
  //     {value:data.data.message}
  //   )
  // }else if(v!==prevState.value){
  //     let data=await axios.get(`https://dog.ceo/api/breed/${v}/images/random`);
  //     this.setState({value:data.data.message})
  //   }

  //  catch(e){
  //   console.log('invalid url');
  // }

  //   //xthis.setState({value:data.data.message});
  // }
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }} class="">
        <label for="opt" class=""></label>
        <select
          onChange={(e) => {
            this.toUpdat(e.target.value);
          }}
          name="opt"
          class=""
        >
          <option selected value={"random"}>
            Random
          </option>
          <option value={"beagle"}>Beagle</option>
          <option value={"boxer"}>Boxer</option>
          <option value={"dalmatian"}>Dalmatian</option>
          <option value={"husky"}>Husky</option>
        </select>
        <img src={this.state.img} alt="image"></img>
        <button
          onClick={(e) => {
            this.toUpdat(e);
          }}
          class=""
        >
          Next
        </button>
      </div>
    );
  }
}

export default App;
