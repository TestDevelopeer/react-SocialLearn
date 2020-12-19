import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../Common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

let maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength50]} name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);