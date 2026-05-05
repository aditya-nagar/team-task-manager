import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Dashboard() {
  const [title, setTitle] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [projectName, setProjectName] = useState("");

  // Stats
  const total = tasks.length;
  const completed = tasks.filter(t => t.status === "Done").length;
  const pending = tasks.filter(t => t.status !== "Done").length;

  // Fetch data
  const fetchData = async () => {
    try {
      const projRes = await API.get("/projects");
      const taskRes = await API.get("/tasks");

      setProjects(projRes.data);
      setTasks(taskRes.data);
    } catch (err) {
      alert("Not authorized. Please login again.");
      window.location.href = "/";
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Create Task
  const createTask = async () => {
    if (!title || !selectedProject) {
      alert("Please enter task title and select project");
      return;
    }

    try {
      await API.post("/tasks", {
        title,
        project: selectedProject
      });
      setTitle("");
      fetchData();
    } catch (err) {
      alert("Error creating task");
    }
  };

  // Create Project
  const createProject = async () => {
    if (!projectName) {
      alert("Enter project name");
      return;
    }

    try {
      await API.post("/projects", { name: projectName });
      setProjectName("");
      fetchData();
    } catch (err) {
      alert("Only Admin can create project");
    }
  };

  // Logout
  const handleLogout = async () => {
    try {
      await API.post("/auth/logout");
    } catch (err) {}
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow p-4 rounded text-center">
          Total: {total}
        </div>
        <div className="bg-green-100 shadow p-4 rounded text-center">
          Done: {completed}
        </div>
        <div className="bg-red-100 shadow p-4 rounded text-center">
          Pending: {pending}
        </div>
      </div>

      {/* Create Project */}
      <div className="mb-6 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Create Project</h2>

        <input
          className="border p-2 mr-2 rounded"
          placeholder="Project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <button
          onClick={createProject}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Add Project
        </button>
      </div>

      {/* Projects */}
      <div className="mb-6 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Projects</h2>

        <ul>
          {projects.map((p) => (
            <li key={p._id} className="border p-2 my-2 rounded">
              {p.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Create Task */}
      <div className="mb-6 bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Create Task</h2>

        <input
          className="border p-2 mr-2 rounded"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className="border p-2 mr-2 rounded"
          onChange={(e) => setSelectedProject(e.target.value)}
        >
          <option value="">Select Project</option>
          {projects.map((p) => (
            <option key={p._id} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>

        <button
          onClick={createTask}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>

      {/* Tasks */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Tasks</h2>

        <ul>
          {tasks.map((t) => (
            <li
              key={t._id}
              className="border p-3 my-2 rounded flex justify-between items-center"
            >
              <span>{t.title}</span>

              <select
                value={t.status}
                onChange={async (e) => {
                  await API.put(`/tasks/${t._id}`, {
                    status: e.target.value
                  });
                  fetchData();
                }}
                className="border p-1 rounded"
              >
                <option>Todo</option>
                <option>In Progress</option>
                <option>Done</option>
              </select>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}