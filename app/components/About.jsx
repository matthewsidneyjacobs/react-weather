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
      <h1 className="text-center">About</h1>
      <p>Welcome to the About Page</p>
      <p>This is a picture of an okapi, nothing to do with weather- I'm just playing around with foundation features.</p>
      <div className="card">
        <div className="card-divider">
          Here is an okapi. Super rare, found in small portion of Africa.
        </div>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Okapi2.jpg/220px-Okapi2.jpg' alt="okapi"/>
        {/* used url-loader didn't change my webpack config at all */}
        <img src={require('url!app/images/okapi.jpg')}/>
        {/* why does taking an image from the web work but not local files? */}
        {/* <img source={require('image!/images/okapi.jpg')} alt="okapi"/> */}
        <div className="card-section">
          <h5>OKAPI</h5>
          <p>They have a prehensile tongue, which allows them to strip leaves off of branches with ease.</p>
        </div>
      </div>

      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
            JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - I used
            Open Weather Map to search for weather data by city name.
        </li>
      </ul>
  </div>
  )
};

module.exports = About;
