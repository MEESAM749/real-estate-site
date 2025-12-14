import { Trash2, Edit } from 'lucide-react';

const AdminPropertyList = ({ properties, onViewDetails, onEdit, onDelete }) => {
    if (!properties || properties.length === 0) {
        return <div style={{ textAlign: 'center', color: '#6b7280', marginTop: '2.5rem' }}>No properties found. Add one to get started!</div>;
    }

    return (
        <div className="property-grid">
            {properties.map((property) => (
                <div key={property.id} className="property-card">
                    <div
                        onClick={() => onViewDetails(property)}
                        className="card-image-container"
                    >
                        {property.imageUrl ? (
                            <img
                                src={property.imageUrl}
                                alt={property.name}
                            />
                        ) : (
                            <div className="card-no-image">No Image</div>
                        )}
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200" />
                    </div>

                    <div className="card-content">
                        <h3 className="card-title" title={property.name}>{property.name}</h3>
                    </div>

                    <div className="card-actions">
                        <button
                            onClick={(e) => { e.stopPropagation(); onEdit(property); }}
                            className="action-btn edit"
                            title="Edit"
                        >
                            <Edit size={18} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                if (window.confirm('Are you sure you want to delete this property?')) {
                                    onDelete(property.id);
                                }
                            }}
                            className="action-btn delete"
                            title="Delete"
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AdminPropertyList;
