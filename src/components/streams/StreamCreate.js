import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderForm = ({ input, label, meta }) => {
    const fieldClass = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={fieldClass}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)} className="ui form error">
        <Field 
          name="title" 
          component={this.renderForm} 
          label="Title"
        ></Field>
        <Field
          name="description"
          component={this.renderForm}
          label="Description"
        ></Field>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Title is required...";
  }

  if (!values.description) {
    errors.description = "Description is required...";
  }

  return errors;
};

const formWrapped = reduxForm({
  form: "StreamCreate",
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
