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
  thematicBreakPlugin,
  imagePlugin,
  CreateLink,
  tablePlugin,
  InsertTable,
  listsPlugin,
  ListsToggle,
  markdownShortcutPlugin,
  InsertThematicBreak,
  BlockTypeSelect,
  quotePlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import React from "react";
import PropTypes from "prop-types";
import { Box, Divider, Paper } from "@mui/material";

const Editor = ({ markdown, editorRef }) => {
  return (
    <Paper
      sx={{
        padding: 2,
        width: "97%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <MDXEditor
          onChange={(e) => console.log(e)}
          ref={editorRef}
          markdown={markdown}
          contentEditableClassName="mdx-editor-content"
          plugins={[
            headingsPlugin(),
            linkPlugin(),
            linkDialogPlugin(),
            tablePlugin(),
            imagePlugin({
              imageUploadHandler: async (file) => {
                return new Promise((resolve, reject) => {
                  const reader = new FileReader();
                  reader.onload = () => {
                    // Returns base64 string
                    resolve(reader.result);
                  };
                  reader.onerror = reject;
                  reader.readAsDataURL(file);
                });
              },
            }),
            quotePlugin(),
            listsPlugin(),
            thematicBreakPlugin(),
            markdownShortcutPlugin(),
            toolbarPlugin({
              toolbarClassName: "my-classname",
              toolbarContents: () => (
                <>
                  <UndoRedo />
                  <Divider orientation="vertical" flexItem />
                  <BoldItalicUnderlineToggles />
                  <Divider orientation="vertical" flexItem />
                  <InsertImage />
                  <CreateLink />
                  <Divider orientation="vertical" flexItem />
                  <ListsToggle />
                  <Divider orientation="vertical" flexItem />
                  <BlockTypeSelect />
                  <Divider orientation="vertical" flexItem />
                  <InsertThematicBreak />
                  <InsertTable />
                  <Divider orientation="vertical" flexItem />
                </>
              ),
            }),
          ]}
        />
      </Box>
    </Paper>
  );
};

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  editorRef: PropTypes.object,
};

export default Editor;
