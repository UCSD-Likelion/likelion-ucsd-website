"use client";

import {
  MDXEditor,
  headingsPlugin,
  toolbarPlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  InsertImage,
  linkPlugin,
  linkDialogPlugin,
  imagePlugin,
  CreateLink,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import React from "react";
import PropTypes from "prop-types";
import { Box, Paper } from "@mui/material";

const Editor = ({ markdown, editorRef }) => {
  return (
    <Paper
      sx={{
        padding: 2,
        width: "95%",
      }}
    >
      <MDXEditor
        onChange={(e) => console.log(e)}
        ref={editorRef}
        markdown={markdown}
        plugins={[
          headingsPlugin(),
          linkPlugin(),
          linkDialogPlugin(),
          imagePlugin(),
          toolbarPlugin({
            toolbarClassName: "my-classname",
            toolbarContents: () => (
              <>
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <InsertImage />
                <CreateLink />
              </>
            ),
          }),
        ]}
      />
    </Paper>
  );
};

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  editorRef: PropTypes.object, // Could refine this further if needed
};

export default Editor;
