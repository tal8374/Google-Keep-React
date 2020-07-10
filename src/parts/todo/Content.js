import React from "react";
import ContentList from "./ContentList";
import ContentText from "./ContentText";

export default function ({ notes, setNotes, isEditMode, isCheckboxMode }) {
  return (
    <React.Fragment>
      {isCheckboxMode ? (
        <ContentList notes={notes} setNotes={setNotes} isEditMode={isEditMode} />
      ) : (
          <ContentText notes={notes} setNotes={setNotes} isEditMode={isEditMode} />
        )}
    </React.Fragment>
  );
}
