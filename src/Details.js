import React from "react";
import pet from "@frontendmasters/pet";
import Carousel from './Carousel';
import ErrorBoundary from "./ErrorBoundary";

class Details extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //initial state
  //   this.state = {
  //     loading: true,
  //   };
  // }
  //replaced with below code after setting up babel plugins, eslint config, added parser to selintrc file
  state = { loading: true };

  //only occurs when page first renders, good for api calls
  componentDidMount() {
    throw new Error('lol')
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
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>loading...</h1>
    } 

    const { animal, breed, location, description, name, media } = this.state

    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

//wrapping it through a HOC will cause it catch all errors of children of Details component and it's children
//spread props below so we don't have to determine all the props being passed 
//caution:only use spread operator when the component (such as ErrorBoundary) doesn't care about the details
export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
};
