import React from "react";
// import { action } from "@storybook/addon-actions";
// import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";

const data = [
  {
    title: "SRA JAIM AIR BAROK",
    tel: "06-5292267"
  },
  {
    title: "SRA JAIM AYER MERBAU",
    tel: "06-5218255"
  }
];

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  return (
    <div>
      <List component="nav">
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem button>
              <ListItemAvatar>
                <Avatar>
                  <InboxIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography noWrap>{item.title}</Typography>}
                secondary={item.tel}
              />
              <ListItemSecondaryAction>
                <DraftsIcon color="action" />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}
