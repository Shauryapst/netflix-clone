import React from "react";
import "./navbar.css";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
function navbar() {
	return (
		<div className="nav_header">
			<img
				className="logo"
				src="http://pngimg.com/uploads/netflix/netflix_PNG25.png"
				alt="Netflix"
			/>
			<div className="nav_options">
				<div class="search">
					<input
						class="search_input"
						type="text"
						placeholder="Titles, people, genres"
					/>
					<IconButton>
						<SearchIcon style={{ color: "white" }} />
					</IconButton>
					<IconButton>
						<NotificationsNoneIcon style={{ color: "white" }} />
					</IconButton>
				</div>
				<Avatar variant="square" className="nav_avatar">
					N
				</Avatar>
			</div>
		</div>
	);
}

export default navbar;
