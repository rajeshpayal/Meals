import "./Register.css"
const Register = () => {

    return <>
        <div>
            <form>
                <label htmlFor="storename">Store Name</label>
                <input type="text" id="storename" placeholder="store name" />
                <label htmlFor="imgUrl">Image url</label>
                <input type="url" id="imgUrl" placeholder="Image Url" />
                <label htmlFor="location">Select Location</label>
                <select defaultValue={"delhi"}>
                    <option value="delhi">Delhi</option>
                    <option value="jaipur">Jaipur</option>
                    <option value="pilani">Pilani</option>
                </select>
            </form>
        </div>
    </>
}

export default Register;