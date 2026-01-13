import React, { useState } from "react";
import "./Properties.css";

const Properties = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isBooked, setIsBooked] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [errors, setErrors] = useState({});

  const propertyList = [
    {
      id: 1,
      title: "Luxury Villa",
      location: "Kochi",
      price: "₹45000",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    },
    {
      id: 2,
      title: "Modern 2 BHK",
      location: "Kakkanad",
      price: "₹32000",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
    },
    {
      id: 3,
      title: "Premium 3 BHK",
      location: "Edappally",
      price: "₹55000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      id: 4,
      title: "Beach Side Villa",
      location: "Vypin",
      price: "₹75000",
      image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
    },
  ];

  const openModal = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
    setIsBooked(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setIsBooked(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10-digit phone number";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!formData.cardNumber) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{16}$/.test(formData.cardNumber)) {
      newErrors.cardNumber = "Card number must be 16 digits";
    }

    if (!formData.expiry) newErrors.expiry = "Expiry date is required";

    if (!formData.cvv) {
      newErrors.cvv = "CVV is required";
    } else if (!/^\d{3}$/.test(formData.cvv)) {
      newErrors.cvv = "CVV must be 3 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsBooked(true);
    }
  };

  return (
    <section id="properties" className="properties-section">
      <h1 className="properties-title">Properties</h1>

      <div className="properties-grid">
        {propertyList.map((property) => (
          <div className="property-card" key={property.id}>
            <img src={property.image} alt={property.title} />
            <div className="card-content">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <span className="price">{property.price}</span>
              <button className="book-btn" onClick={() => openModal(property)}>
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            {!isBooked ? (
              <>
                <h2>Book {selectedProperty.title}</h2>

                <form onSubmit={handleSubmit}>
                  <h4>User Details</h4>

                  <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
                  {errors.name && <small>{errors.name}</small>}

                  <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                  {errors.phone && <small>{errors.phone}</small>}

                  <input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                  {errors.email && <small>{errors.email}</small>}

                  <h4>Payment Details</h4>

                  <input name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} />
                  {errors.cardNumber && <small>{errors.cardNumber}</small>}

                  <input type="month" name="expiry" value={formData.expiry} onChange={handleChange} />
                  {errors.expiry && <small>{errors.expiry}</small>}

                  <input type="password" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} />
                  {errors.cvv && <small>{errors.cvv}</small>}

                  <div className="modal-actions">
                    <button type="submit" className="confirm-btn">Pay & Book</button>
                    <button type="button" className="cancel-btn" onClick={closeModal}>Cancel</button>
                  </div>
                </form>
              </>
            ) : (
              <div className="success-box">
                <h2>Payment Successful ✅</h2>
                <p><strong>Property:</strong> {selectedProperty.title}</p>
                <p><strong>Price:</strong> {selectedProperty.price}</p>
                <button className="confirm-btn" onClick={closeModal}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Properties;

