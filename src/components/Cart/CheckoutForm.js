import { useForm } from "react-hook-form";

const CheckoutForm = () => {
    <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("Name")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("Mobile Number", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
    </form>
}

export default CheckoutForm;