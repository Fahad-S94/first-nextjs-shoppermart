export default function FormInputs() {
  return (
    <>
      <label htmlFor="titleIn">Title</label>
      <input name="title" id="titleIn" type="text" placeholder="Title" />

      <label htmlFor="priceIn">Price</label>
      <input name="price" id="priceIn" type="number" placeholder="Price" />

      <label htmlFor="categoryIn">Category</label>
      <select name="category" id="categoryIn" defaultValue="0">
        <option disabled value="0">
          Select Category
        </option>
        <option value="cars">Cars</option>
        <option value="electronics">Electronics</option>
        <option value="properties">Properties</option>
      </select>

      <label htmlFor="descriptionIn">Description</label>
      <textarea name="description" id="descriptionIn" placeholder="description"></textarea>

      <label htmlFor="contactIn">Contact Info</label>
      <textarea
        name="contact"
        id="contactIn"
        placeholder="phone #:438 979 9666"
      ></textarea>
    </>
  );
}
