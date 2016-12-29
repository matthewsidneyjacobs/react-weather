var React = require('react');


// var WeatherMessage = React.createClass({
//   render: function() {
//     var {temp, location} = this.props;
//     return (
//       <div>
//         <h1>It is {temp} degrees in {location}</h1>
//       </div>
//     )
//   }
// });

//you can actually destructure in the arguments. im not sure why
// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//   return (
//     <div>
//       <h1>It is {temp} degrees in {location}</h1>
//     </div>
//   )
// }

//this is the same as above
var WeatherMessage = ({temp,location}) => {

  return (
    <div>
      <h1>It is {temp} degrees in {location}</h1>
    </div>
  )
}
module.exports = WeatherMessage;
