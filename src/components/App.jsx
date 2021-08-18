import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormDialog from "./FormDialog";
import { toggleDialog } from "./../actions/dialogAction";
import { useDispatch } from "./../utils/stateManager";
import TaskList from "./TaskList";

function App() {
	const dispatch = useDispatch();
	const handleOpenDialog = () => {
		dispatch(toggleDialog(true));
	};

	return (
		<>
			<Container maxWidth="md">
				<Button variant="outlined" onClick={handleOpenDialog}>
					{"Add task"}
				</Button>
				<TaskList />
			</Container>
			<FormDialog />
		</>
	);
}

export default App;
