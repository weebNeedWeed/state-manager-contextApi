import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "./../utils/stateManager";
import { toggleDialog } from "./../actions/dialogAction";
import { addTask } from "./../actions/taskAction";

function FormDialog() {
	const open = useSelector((state) => state.dialog.open);
	const dispatch = useDispatch();
	const [taskName, setTaskName] = useState("");

	const handleCloseDialog = () => {
		dispatch(toggleDialog(false));
		setTaskName("");
	};

	const handleChange = (event) => setTaskName(event.target.value);

	const handleSubmit = () => {
		dispatch(addTask(taskName));
		dispatch(toggleDialog(false));
		setTaskName("");
	};

	return (
		<Dialog
			open={open}
			onClose={handleCloseDialog}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">{"Add task"}</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Task name"
					type="text"
					fullWidth
					value={taskName}
					onChange={handleChange}
				/>
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={handleCloseDialog}>
					{"Cancel"}
				</Button>
				<Button color="primary" onClick={handleSubmit}>
					{"Add"}
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default FormDialog;
