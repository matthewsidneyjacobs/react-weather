var React = require('react');
// var okapi = require('/images/okapi.jpg').Image;
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
      <p>Welcome to the About Page</p>
      <p>This is a picture of an okapi, nothing to do with weather- I'm just playing around with foundation features.</p>
      <div className="card">
        <div className="card-header">
          Here is an okapi. Super rare, found in small portion of Africa.
        </div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Okapi2.jpg/220px-Okapi2.jpg' alt="okapi"/>
        {/* <img source={require('image!/images/okapi.jpg')} alt="okapi"/> */}
        <div className="card-section">
          <h5>OKAPI</h5>
          <p>They have a prehensile tongue, which allows them to strip leaves off of branches with ease.</p>
        </div>
      </div>
  </div>
  )
};

module.exports = About;
