// pages/PropertyDetail.js
import { useParams } from 'react-router-dom';

const dummyData = {
  1: { title: 'Cozy Apartment', location: 'Kolkata', price: 2500, description: 'Nice and cozy place.' },
  2: { title: 'Luxury Villa', location: 'Mumbai', price: 7000, description: 'Spacious and elegant.' },
};

export default function PropertyDetail() {
  const { id } = useParams();
  const property = dummyData[id];

  if (!property) return <p>Property not found</p>;

  return (
    <div>
      <h2>{property.title}</h2>
      <p>{property.description}</p>
      <p>Location: {property.location}</p>
      <p>Price: ₹{property.price}/night</p>
    </div>
  );
}
