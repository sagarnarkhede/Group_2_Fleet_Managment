import { NavLink } from "react-router-dom";
import React, { Component } from 'react';

class Details extends Component {
    constructor(props)
    {
        super(props)
        console.log(this.props);
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Details;
// const Details = props => {
//     console.log(props.location);
//   const { username, email, city, phone } =
//     (props.location && props.location.state) || {};
//   return (
//     <div>
//       <NavLink to="/" activeClassName="active">
//         Go Back
//       </NavLink>
//       <div className="form-details">
//         <div>
//           <strong>Username:</strong> {username}
//         </div>
//         <div>
//           <strong>Email:</strong> {email}
//         </div>
//         <div>
//           <strong>City:</strong> {city}
//         </div>
//         <div>
//           <strong>Phone:</strong> {phone}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;
