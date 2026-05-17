export const fetchTasks = async (setTasks, setIsLoading, setError) => {
    try {
        setIsLoading(true);
        const res = await fetch("/api/v1/tasks");
        if (!res.ok) {
            throw new Error("Failed to get tasks.");
        }

        const data = await res.json();
        setTasks(data);
    } catch (err) {
        setError(err.message);
    } finally {
        setIsLoading(false);
    }
};
