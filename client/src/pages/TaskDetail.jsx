import { useParams } from "react-router-dom";

const TaskDetail = () => {
    const { taskId } = useParams();
    return <h1>Details for task: {taskId}</h1>;
};

export default TaskDetail;
