import { Component } from "react";

class ImageComponent extends Component{
    render(){
        return (
        <>
        <h1 className={this.props.cssClass}>green</h1>
        <img src={this.props.src} alt={this.props.alt}></img>

        </>
        )
    }

}
export default ImageComponent