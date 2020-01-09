import React, {Component} from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends Component {
  render() {
    const businesses = this.props.businesses.map(business => <Business key={business.id} business={business}/>); 
    return(
      <div className="BusinessList">
        {businesses}
      </div>
    )
  }
}

export default BusinessList;