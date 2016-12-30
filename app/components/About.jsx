var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     )
//   }
// });


//you can refactor this code becuase this is a stateless functional Component.  it doesn't care about state
var About =  (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>Welcome to the About Page!!</p>
  </div>
  )
};

module.exports = About;
