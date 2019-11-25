// NoteList
import React, { Component } from "react";
import "./index.less";

class NoteList extends Component {
  handleNote(note) {
    const { onSelectNote } = this.props;
    typeof onSelectNote === "function" && onSelectNote(note);
  }
  render() {
    return (
      <ul className="note-list">
        <li className="list-item">
          <span onClick={this.handleNote.bind(this, "defaultnote")}>
            default
          </span>
        </li>
        <li className="list-item">
          <span onClick={this.handleNote.bind(this, "primarynote")}>
            primary
          </span>
        </li>
        <li className="list-item">
          <span onClick={this.handleNote.bind(this, "successnote")}>
            success
          </span>
        </li>
        <li className="list-item">
          <span onClick={this.handleNote.bind(this, "infonote")}>info</span>
        </li>
        <li className="list-item">
          <span onClick={this.handleNote.bind(this, "warningnote")}>
            warning
          </span>
        </li>
        <li className="list-item">
          <span onClick={this.handleNote.bind(this, "dangernote")}>danger</span>
        </li>
      </ul>
    );
  }
}
export default NoteList;
