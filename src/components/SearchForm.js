import React from "react";
import { withFormik } from 'formik';
import { StyledForm, StyledSubmitInput, StyledField } from './style';

const SearchForm = (props) => {
  return (
    <section className="search-form">
     <StyledForm>
       <StyledField type="text" name="search" placeholder="Search" />
       <StyledSubmitInput type="submit" value="Err, right. Where's that list?" />
     </StyledForm>
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
      formikBag.props.urlSetter(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/?name=${value.search}`);
      formikBag.setStatus('Form Submitting');
  }
})(SearchForm)