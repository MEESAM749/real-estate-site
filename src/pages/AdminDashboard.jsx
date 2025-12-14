import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import AdminPropertyForm from '../components/admin/AdminPropertyForm';
import AdminPropertyList from '../components/admin/AdminPropertyList';
import PropertyDetailsModal from '../components/admin/PropertyDetailsModal';
import '../styles/admin-dashboard.css';

const AdminDashboard = () => {
    const [properties, setProperties] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProperty, setEditingProperty] = useState(null);

    const propertiesCollection = collection(db, "properties");

    const fetchProperties = async () => {
        try {
            const data = await getDocs(propertiesCollection);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));
            setProperties(filteredData);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, []);

    const handleAddProperty = async (data) => {
        try {
            await addDoc(propertiesCollection, data);
            fetchProperties();
        } catch (error) {
            console.error("Error adding property: ", error);
        }
    };

    const handleUpdateProperty = async (id, data) => {
        const propertyDoc = doc(db, "properties", id);
        try {
            await updateDoc(propertyDoc, data);
            fetchProperties();
            setEditingProperty(null); // Close edit mode
        } catch (error) {
            console.error("Error updating property: ", error);
        }

    };

    const handleDeleteProperty = async (id) => {
        const propertyDoc = doc(db, "properties", id);
        try {
            await deleteDoc(propertyDoc);
            fetchProperties();
        } catch (error) {
            console.error("Error deleting property: ", error);
        }
    };

    const openDetails = (property) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };

    const closeDetails = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const startEditing = (property) => {
        setEditingProperty(property);
    }

    const cancelEditing = () => {
        setEditingProperty(null);
    }

    return (
        <div className="admin-dashboard-container">
            {/* Left Side: Form */}
            <div className="admin-sidebar">
                <h2>
                    {editingProperty ? 'Edit Property' : 'Add New Property'}
                </h2>
                <AdminPropertyForm
                    onSubmit={editingProperty ? (data) => handleUpdateProperty(editingProperty.id, data) : handleAddProperty}
                    initialData={editingProperty}
                    onCancel={editingProperty ? cancelEditing : undefined}
                />
            </div>

            {/* Right Side: List */}
            <div className="admin-main-content">
                <h2>Properties List</h2>
                <AdminPropertyList
                    properties={properties}
                    onViewDetails={openDetails}
                    onEdit={startEditing}
                    onDelete={handleDeleteProperty}
                />
            </div>

            {/* Mobile View List (Below Form on Small Screens) - Optional/TODO */}
            {/* For now we just rely on the hidden md:block for the list, 
                 but in a real app we'd probably want to stack them or tab them. 
                 The prompt asked for split on big screens. */}

            {/* Modal */}
            {isModalOpen && selectedProperty && (
                <PropertyDetailsModal
                    property={selectedProperty}
                    onClose={closeDetails}
                />
            )}
        </div>
    );
};

export default AdminDashboard;
