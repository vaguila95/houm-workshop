import "./Form.css"

export interface IFormData {
  name: string;
  address: string;
}

interface FormProps {
  onSubmit: (formData: IFormData) => void;
}

const Form = ({ onSubmit }: FormProps) => {
  const handleSubmit = (event: any) => {
    event.preventDefault()
    onSubmit({
      name: event.target.name.value, address: 
      event.target.address.value
    })
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" name="name" placeholder="Nombre" />
      <input type="text" name="address" placeholder="Dirección" />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form