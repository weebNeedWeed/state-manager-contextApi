import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useSelector } from "./../utils/stateManager";

function TaskList() {
	const listTask = useSelector((state) => state.task.listTask);
	console.log(listTask);
	return (
		<>
			{listTask.map((element, index) => (
				<Card key={index} style={{ marginBottom: "20px" }}>
					<CardContent>
						<Typography color="textSecondary">{element}</Typography>
					</CardContent>
				</Card>
			))}
		</>
	);
}
export default TaskList;
