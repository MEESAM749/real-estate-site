import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { uploadToCloudinary } from '../../utils/cloudinary';

const AdminPropertyForm = ({ onSubmit, initialData, onCancel }) => {
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            description: '',
            location: '',
            price: '',
            imageUrl: ''
        }
    });

    const [uploading, setUploading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState('');

    useEffect(() => {
        if (initialData) {
            setValue('name', initialData.name);
            setValue('description', initialData.description);
            setValue('location', initialData.location);
            setValue('price', initialData.price);
            setValue('imageUrl', initialData.imageUrl);
            setPreviewUrl(initialData.imageUrl);
        } else {
            reset();
            setPreviewUrl('');
        }
    }, [initialData, setValue, reset]);

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        try {
            const url = await uploadToCloudinary(file);
            if (url) {
                setValue('imageUrl', url);
                setPreviewUrl(url);
            }
        } catch (error) {
            console.error("Upload failed", error);
            alert("Image upload failed");
        } finally {
            setUploading(false);
        }
    };

    const submitHandler = (data) => {
        onSubmit(data);
        if (!initialData) {
            reset();
            setPreviewUrl('');
        }
    };

    return (
        <form onSubmit={handleSubmit(submitHandler)} className="admin-form">
            <div className="form-group">
                <label>Property Name</label>
                <input
                    {...register('name', { required: 'Name is required' })}
                    className="form-input"
                    placeholder="e.g. Sunset Villa"
                />
                {errors.name && <span className="error-message">{errors.name.message}</span>}
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea
                    {...register('description', { required: 'Description is required' })}
                    rows={4}
                    className="form-textarea"
                    placeholder="Describe the property..."
                />
                {errors.description && <span className="error-message">{errors.description.message}</span>}
            </div>

            <div className="form-group">
                <label>Location</label>
                <input
                    {...register('location', { required: 'Location is required' })}
                    className="form-input"
                    placeholder="e.g. Miami, FL"
                />
                {errors.location && <span className="error-message">{errors.location.message}</span>}
            </div>

            <div className="form-group">
                <label>Price (Optional)</label>
                <input
                    {...register('price')}
                    className="form-input"
                    placeholder="e.g. $500,000"
                />
            </div>

            <div className="form-group">
                <label>Property Image</label>
                <div className="file-input-wrapper">
                    <input
                        type="file"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </div>
                {uploading && <p style={{ color: '#2563eb', fontSize: '0.875rem' }}>Uploading image...</p>}

                {/* Hidden input to store the URL for form submission validation if needed,
                    though we set it manually via setValue.
                    We can make it required if we want.
                */}
                <input type="hidden" {...register('imageUrl', { required: 'Image is required' })} />
                {errors.imageUrl && <span className="error-message">{errors.imageUrl.message}</span>}

                {previewUrl && (
                    <div className="image-preview">
                        <p style={{ fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem' }}>Preview:</p>
                        <img src={previewUrl} alt="Preview" />
                    </div>
                )}
            </div>

            <div className="form-actions">
                <button
                    type="submit"
                    disabled={uploading}
                    className="admin-btn admin-btn-primary"
                >
                    {initialData ? 'Update Property' : 'Add Property'}
                </button>
                {initialData && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="admin-btn admin-btn-secondary"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
};

export default AdminPropertyForm;
