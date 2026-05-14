const DeleteTask = ({ id, onDelete }) => {
    const handleRemove = () => {
        onDelete(id);
    };

    return (
        <button
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 font-bold"
        >
            Delete
        </button>
    );
};

export default DeleteTask;
