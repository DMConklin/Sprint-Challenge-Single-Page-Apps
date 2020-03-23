import React from "react";
import { withFormik, Form, Field } from 'formik';

const SearchForm = (props) => {
  return (
    <section className="search-form">
     <Form>
       <Field type="text" name="search" placeholder="Search" /><input type="submit" value="Search" />
     </Form>
    </section>
  );
}

export default withFormik({
  mapPropsToValues: props => {
      return {
          search: props.search || "",
      };
  },
  handleSubmit: (value, formikBag) => {
      formikBag.props.url(value.search);
      formikBag.setStatus('Form Submitting');
      formikBag.resetForm();
  }
})(SearchForm)