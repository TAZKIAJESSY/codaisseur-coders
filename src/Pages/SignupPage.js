import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../store/user/actions";
import { useHistory } from "react-router-dom";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const onFieldChange = (e) => {
    // console.log("Field Change", e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted with value", formData);
    const { name, email, password } = formData;
    dispatch(signUp({ name, email, password, history }));
  };

  return (
    <div>
      {" "}
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Name </label>
          <input
            type="text"
            value={formData.name}
            name="name"
            onChange={onFieldChange}
            required
          ></input>
        </div>
        <div>
          {" "}
          <label>E-mail </label>
          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={onFieldChange}
            required
          ></input>
        </div>
        <div>
          {" "}
          <label>Password </label>
          <input
            type="text"
            value={formData.password}
            name="password"
            onChange={onFieldChange}
            required
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
