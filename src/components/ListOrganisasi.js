import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import IconChevronRight from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

export default function ListOrganisasi({
  items = [],
  showAvatar = false,
  avatarKey = "",
  buttonMode = false,
  showDivider = true,
  idKey,
  showSecondaryTitle = false,
  primaryTitleKey = "",
  secondaryTitleKey = "",
  showRightArrow = false
}) {
  return (
    <List>
      {items.map(item => (
        <React.Fragment key={item[idKey]}>
          <ListItem button={buttonMode}>
            {showAvatar && (
              <ListItemAvatar>
                <Avatar src={item[avatarKey]} />
              </ListItemAvatar>
            )}

            <ListItemText
              primary={<Typography noWrap>{item[primaryTitleKey]}</Typography>}
              secondary={showSecondaryTitle && item[secondaryTitleKey]}
              //primaryTypographyProps={{ noWrap: true }}
              secondaryTypographyProps={{ noWrap: true }}
            />
            <ListItemSecondaryAction>
              {showRightArrow && <IconChevronRight color="action" />}
            </ListItemSecondaryAction>
          </ListItem>
          {showDivider && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
}
