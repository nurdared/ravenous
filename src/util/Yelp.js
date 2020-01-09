import React from 'react';

const apiKey = 'RnmfpsZbum02SMVZHFES0EYYVj-5s_uWcpUub1bGCkx0Gh5d3euyv2Bxru5E7ocuu6YRPC_vOsRDYWXX4_NxOAwSuzWpArGfJTSMHODyK66kR3a04OQGLrVijWIXXnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, { 
      headers: {
        Authorization: `Bearer ${apiKey}` 
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.display_address,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zipCode,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }
        })
      }
      else {
        return <h1>No Data Found</h1>
      }
    })
  }
};

export default Yelp;
