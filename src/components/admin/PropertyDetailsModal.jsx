import { X } from 'lucide-react';

const PropertyDetailsModal = ({ property, onClose }) => {
    if (!property) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal-header">
                    <h2>{property.name}</h2>
                    <button onClick={onClose} className="close-btn">
                        <X size={24} />
                    </button>
                </div>

                <div className="modal-body">
                    <div className="modal-image-wrapper">
                        {property.imageUrl ? (
                            <img src={property.imageUrl} alt={property.name} />
                        ) : (
                            <span style={{ color: '#9ca3af' }}>No Image Available</span>
                        )}
                    </div>

                    <div className="modal-details">
                        <div className="detail-item">
                            <h3>Location</h3>
                            <p>{property.location}</p>
                        </div>

                        {property.price && (
                            <div className="detail-item">
                                <h3>Price</h3>
                                <p className="price">{property.price}</p>
                            </div>
                        )}

                        <div className="detail-item">
                            <h3>Description</h3>
                            <p>{property.description}</p>
                        </div>

                        <div style={{ fontSize: '0.75rem', color: '#9ca3af', paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                            Property ID: {property.id}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsModal;
