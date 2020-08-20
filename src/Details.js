import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  constructor(props) {
    super(props);

    //initial state
    this.state = {
      loading: true,
    };
  }

  //only occurs when page first renders, good for api calls
  componentDidMount() {
    //pet is an api call
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    });
  }

  render() {}
}

export default Details;
