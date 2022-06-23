// TaskList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { getTasks } from "../taskService";
import TaskList from "../TaskList";

jest.mock("../taskService");

describe("Component: TaskList", () => {
  it("displays returned tasks on successful fetch", async () => {
    await getTasks.mockResolvedValue({
      data: [
        { id: 0, name: "Task Zero", completed: false },
        { id: 1, name: "Task One", completed: true }
      ]
    });

    const{ debug }  = render(<TaskList />);

    expect(screen.getByText("Task Zero")).toBeInTheDocument();
    expect(screen.getByText("Task One")).toBeInTheDocument();

    debug();
  });

  it("displays error message when fetching tasks raises error", async () => {
    getTasks.mockRejectedValue(new Error("broken"));

    render(<TaskList />);

    const errorDisplay = await screen.findByText("Failed to fetch tasks");
    expect(errorDisplay).toBeInTheDocument();

    const displayedTasks = screen.queryAllByTestId(/task-id-\d+/);
    expect(displayedTasks).toEqual([]);
  });
});
