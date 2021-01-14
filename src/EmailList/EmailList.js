import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@material-ui/icons";
import React from "react";
import EmailRow from "../EmailRow/EmailRow";
import Section from "../Section/Section";
import "./EmailList.css";

function EmailList() {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__section">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="blue" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        <EmailRow
          title="First Title"
          subject="First Subject "
          description="First description"
          time="10pm"
        />

        <EmailRow
          title="Title2"
          subject="Second Subject "
          description="First description"
          time="10pm"
        />

        <EmailRow
          title="Third Title"
          subject="Third Subject "
          description="Third description adding texts Third description adding texts Third description adding texts"
          time="10pm"
        />
      </div>
    </div>
  );
}

export default EmailList;
