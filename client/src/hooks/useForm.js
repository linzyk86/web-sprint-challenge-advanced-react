// write your custom hook here to control your checkout form
export const useForm = ( initialValues) => {
    const[setValues, values] = [];

     const handleChanges = e => {
    console.log(e.target.name);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = e => {
        if (e) e.preventDefault();
        
    };

    const clearForm = e => {
    e.preventDefault();
    setValues(initialValues);
  };
    

    return [values, clearForm, handleSubmit, handleChanges];

}