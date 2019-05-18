import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/button";
import SimpleList from "../src/components/List";
import { withKnobs, text, boolean, number, array, object } from "@storybook/addon-knobs";
import { data as dataListOrganisasi, notes as notesListOrganisasi } from "./ListOrganisasi";
import ListOrganisasi from "../src/components/ListOrganisasi";

storiesOf("List", module)
  .addDecorator(withKnobs)
  .add(
    "Organisasi",
    () => {
      const showAvatar = boolean("showAvatar", true);
      const buttonMode = boolean("buttonMode", true);
      const showDivider = boolean("showDivider", true);
      const idKey = text("idKey", "id");
      const showSecondaryTitle = boolean("showSecondaryTitle", true);
      const primaryTitleKey = text("primaryTitleKey", "nama");
      const secondaryTitleKey = text("secondaryTitleKey", "guruBesar");
      const showRightArrow = boolean("showRightArrow", true);
      const avatarKey = text("avatarKey", "thumbnail");
      const items = object("items", dataListOrganisasi);

      return (
        <ListOrganisasi
          items={items}
          idKey={idKey}
          buttonMode={buttonMode}
          primaryTitleKey={primaryTitleKey}
          showAvatar={showAvatar}
          showDivider={showDivider}
          showSecondaryTitle={showSecondaryTitle}
          secondaryTitleKey={secondaryTitleKey}
          showRightArrow={showRightArrow}
          avatarKey={avatarKey}
        />
      );
    },
    {
      notes: notesListOrganisasi
    }
  );
