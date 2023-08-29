import React from "react";

export function InputScreen() {
  return (
    <div>
      <textarea className="textArea"></textarea>
      <textarea className="textArea"></textarea>
      <div className="inputFields">
        <input type="date" placeholder="Interview Date" />
        <select name="clientName">
          <option value="client1">Client 1</option>
          <option value="client2">Client 2</option>
        </select>
        <select name="prospectOrg">
          <option value="org1">Org 1</option>
          <option value="org2">Org 2</option>
        </select>
        <input type="text" placeholder="Interviewee" />
        <button>Submit</button>
      </div>
    </div>
  );
}
