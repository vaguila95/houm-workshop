import "./Form.css"

const Form = () => {
  const postProperty = () => console.log("postProperty")

  return (
    <form onSubmit={postProperty} className="form">
      <input type="text" name="name" placeholder="Nombre" />
      <input type="text" name="address" placeholder="Dirección" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form