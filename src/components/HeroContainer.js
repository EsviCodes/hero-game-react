import React from "react";
import { connect } from "react-redux";
import Hero from "./Hero";
import NewHero from "./NewHero";

class HeroContainer extends React.Component {
  rest = () => {
    // console.log("PROPS IN HEROCONTAINER", this.props); // dispatch!
    // console.log((this.props.heroBatman.health = 10)); // works!
    this.props.dispatch({
      type: "REST"
    });
  };

  changeName = name => {
    // console.log(
    //   "I am a callback prop and I have access to",
    //   this.props.dispatch
    // );
    console.log("new name:", name);
    this.props.dispatch({
      type: "NEW_NAME",
      payload: name
    });
  };

  battarang = () => {
    //console.log("Battarang");
    // console.log("PROPS IN HEROCONTAINER", this.props.heroBatman.weapon.type);
    this.props.dispatch({
      type: "PICKUP_BATTARANG",
      payload: {
        type: this.props.heroBatman.weapon.type,
        damage: this.props.heroBatman.weapon.damage
      }
    });
  };

  stunGrenade = () => {
    // console.log("Picked up Stun Grenade"); // works!
    this.props.dispatch({
      type: "PICKUP_STUN_GRENEDE",
      payload: { type: "Stun Grenade", damage: 5 }
    });
  };
  render() {
    return (
      <div>
        <p>Hi There! What's your name?</p>
        <NewHero hero={this.props.heroBatman} changeName={this.changeName} />
        <Hero
          hero={this.props.heroBatman}
          updateHealth={this.rest}
          stunGrenade={this.stunGrenade}
          battarang={this.battarang}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  //console.log("STATE IS", state);
  return {
    heroBatman: state.heroBatman
  };
};

export default connect(mapStateToProps)(HeroContainer);
